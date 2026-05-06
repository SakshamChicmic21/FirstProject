// === CONFIGURATION ===

// 🧩 Question IDs (centralized for easy maintenance)
const QUESTION_IDS = {
  RES: "3a39ec4d-adce-4d73-a976-8dd79729b052",
  DOM: "874b5e92-0bba-4e08-ae4b-16287711e81f",
  NAT: "550e8400-e29b-41d4-a716-446655440000",
  HIG: "5879b18c-6a6f-4e69-aba1-cdb9841cfa4d",
  ACT: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  THI: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  TRA: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  AST: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  FND: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
  BNK: "c56a4180-65aa-42ec-a945-5fd21dec0538",
  SRC: "a3bb189e-8bf9-4f24-8235-25e2c2cc3c59",
};

// 🌍 Country Data (unchanged)

if (
  !data.countries ||
  !Array.isArray(data.countries) ||
  !data.countries.length
) {
  fetch("https://meshid.app/api/system/isocountries")
    .then((res) => res.json())
    .then((json) => {
      data.countries = json;
    })
    .catch((err) => {
      console.error("Failed to load countries", err);
    });
}

const countryData = data.countries || [];

// 🧠 Retrieve question ID dynamically
function getQuestionId(tag) {
  const section = QUESTION_IDS[tag];
  if (!section) return null;
  if (typeof section === "string") return section;
}

// 🔡 Convert a string to PascalCase
function toPascalCase(key) {
  return String(key || "")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

// 🔍 Find ISO value from country label
function getCountryValue(input) {
  if (!input) return null;

  // If already ISO code
  if (typeof input === "string" && input.length === 2) {
    return input;
  }

  // If object from Form.io select
  if (typeof input === "object") {
    if (input.value) return input.value;
    if (input.label) input = input.label;
  }

  const trimmed = String(input).trim();
  const hit = countryData.find((c) => c.label.trim() === trimmed);
  return hit ? hit.value : null;
}

// ✅ Validate if a value is non-empty
function hasValue(val) {
  if (val === undefined || val === null) return false;
  if (typeof val === "string" && val.trim() === "") return false;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === "object") return Object.keys(val).length > 0;
  return true;
}

// 🏷️ Extract indicator from tags
function getIndicator(tags = []) {
  for (const t of tags) {
    if (t !== "Risk" && t !== "Grid") return t || null;
  }
  return null;
}

// 🧩 Recursively collect Risk-tagged children inside grid components
function collectRiskChildren(component, list = []) {
  if (!component || typeof component !== "object") return list;

  const tags = Array.isArray(component.tags) ? component.tags : [];
  const isGrid = tags.includes("Grid");
  const isRisk = tags.includes("Risk");

  if (isRisk && !isGrid && !component.hidden) list.push(component);

  if (component.type === "columns" && Array.isArray(component.columns)) {
    for (const col of component.columns || []) {
      for (const c of col.components || []) collectRiskChildren(c, list);
    }
  } else if (Array.isArray(component.components)) {
    for (const c of component.components) collectRiskChildren(c, list);
  }

  return list;
}

// === CORE FUNCTION ===

function findAndConstructObjects(form, row) {
  const results = {};

  function iterate(obj, rowRef) {
    if (!obj || typeof obj !== "object") return;

    const tags = Array.isArray(obj.tags) ? obj.tags : [];
    const isGrid = tags.includes("Grid");
    const isRisk = tags.includes("Risk");

    // 1️⃣ Handle Grid components
    if (isGrid && obj.key && rowRef?.[obj.key]) {
      const gridRows = rowRef[obj.key];
      if (Array.isArray(gridRows)) {
        const gridArray = [];
        const riskChildren = collectRiskChildren({
          components: obj.components,
        });

        for (const row of gridRows) {
          const rowResult = {};

          for (const child of riskChildren) {
            const childKey = child.key ? toPascalCase(child.key) : "Unknown";
            const indicator = getIndicator(child.tags);
            const tags = child.tags;
            const qId = getQuestionId(tags[2]);
            let value = row?.[child.key];

            if (indicator === "Country" && hasValue(value)) {
              if (Array.isArray(value)) {
                value = value.map((v) => getCountryValue(v)).filter(Boolean);

                if (!value.length) continue; // DO NOT return
              } else {
                value = getCountryValue(value);
                if (!value) continue;
              }

              rowResult[childKey] = { value, indicator, questionId: qId };
              continue;
            }

            if (!hasValue(value)) continue;

            if (indicator === "SmartForm") {
              if (typeof value === "object" && !Array.isArray(value)) {
                for (const [k, v] of Object.entries(value)) {
                  if (!hasValue(v)) continue;
                  const splitKey = `${childKey}_${k}`;
                  rowResult[splitKey] = {
                    value: v,
                    indicator,
                    questionId: qId,
                  };
                }
              } else {
                rowResult[childKey] = { value, indicator, questionId: qId };
              }
            } else if (indicator) {
              rowResult[childKey] = { value, indicator, questionId: qId };
            }
          }

          if (Object.keys(rowResult).length > 0) gridArray.push(rowResult);
        }

        results[toPascalCase(obj.key)] = gridArray;
      }
      return;
    }

    // 2️⃣ Handle non-grid Risk fields
    if (isRisk && !isGrid && !obj.hidden) {
      const objectName = obj.key ? toPascalCase(obj.key) : "UnknownName";
      const indicator = getIndicator(tags);
      const qId = getQuestionId(tags[2]);
      let value = rowRef ? rowRef[obj.key] : null;

      // ✅ Country indicator
      if (indicator === "Country" && hasValue(value)) {
        if (Array.isArray(value)) {
          value = value.map((v) => getCountryValue(v)).filter(Boolean);

          if (!value.length) return;
        } else {
          value = getCountryValue(value);
          if (!value) return;
        }

        results[objectName] = { value, indicator, questionId: qId };
        return;
      }

      if (!hasValue(value)) return;

      // ✅ SmartForm indicator
      if (indicator === "SmartForm") {
        if (typeof value === "object" && !Array.isArray(value)) {
          for (const [k, v] of Object.entries(value)) {
            if (!hasValue(v)) continue;
            const splitKey = `${objectName}_${k}`;
            results[splitKey] = { value: v, indicator, questionId: qId };
          }
        } else {
          results[objectName] = { value, indicator, questionId: qId };
        }
      }
      // ✅ All other indicators
      else if (indicator) {
        results[objectName] = { value, indicator, questionId: qId };
      }
    }

    // 3️⃣ Recurse through containers
    if (obj.type === "columns" && Array.isArray(obj.columns)) {
      for (const col of obj.columns) {
        for (const comp of col.components || []) iterate(comp, rowRef);
      }
    } else {
      for (let k in obj) {
        const v = obj[k];
        if (v && typeof v === "object") iterate(v, rowRef);
      }
    }
  }

  iterate(form, row);
  return results;
}

// === EXECUTION ===

function transformData(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        result[key] = value.map((item) => ({ ...item }));
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}

value = transformData(findAndConstructObjects(form, row));