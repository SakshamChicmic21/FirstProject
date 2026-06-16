function injectIconsForTaggedComponents(form, tag) {
  function findComponents(components) {
    components.forEach((c) => {
      if (c.tags && c.tags.includes(tag)) {
        try {
          // 1. Extract icons from calculateValue
          const match = c.calculateValue.match(/icons\s*=\s*(\[[^\]]+\])/);
          const iconsArray = match
            ? JSON.parse(match[1].replace(/\\\"/g, '"'))
            : [];
          const compId = c.id || c.key;

          // 2. Find the DOM element
          const element = document.getElementById(compId);
          if (!element) return;

          const formRadio = element.querySelector(".form-radio");
          if (!formRadio) return;

          const wrappers = formRadio.querySelectorAll('[ref="wrapper"]');

          // 3. Inject icons safely
          wrappers.forEach((wrapper, index) => {
            const span = wrapper.querySelector("span");
            if (span && !span.querySelector(".icon")) {
              const iconHTML = `
                <div class="icon">
                  <i class="fa-solid ${iconsArray[index]}"></i>
                </div>`;
              span.insertAdjacentHTML("afterbegin", iconHTML);
            }
          });
        } catch (e) {
          console.error("Error processing component:", c, e);
        }
      }

      if (c.components) {
        findComponents(c.components);
      }
    });
  }

  findComponents(form.components);
}

// Creating Page-title dynamically

function injectDynamicContent(
  listSelector,
  tabPaneSelector,
  fieldsetBodySelector,
) {
  const listItems = document.querySelectorAll(listSelector);
  const tabPanes = document.querySelectorAll(tabPaneSelector);

  listItems.forEach((li, index) => {
    const tabLink = li.querySelector("a.nav-link");

    if (tabLink) {
      const tabName =
        Array.from(tabLink.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .map((node) => node.textContent.trim())
          .join("") || `Tab ${index + 1}`;

      const targetTabPane = tabPanes[index];

      if (targetTabPane) {
        const fieldsetBody = targetTabPane.querySelector(fieldsetBodySelector);

        if (fieldsetBody) {
          const existingContent =
            fieldsetBody.querySelector(".dynamic-content");

          if (!existingContent) {
            const newElement = document.createElement("div");
            newElement.className = "dynamic-content";
            newElement.innerHTML = `
              <div ref="component" class="formio-component formio-component-htmlelement formio-component-html page-title" id="eqe9ki">   
                <p ref="html">${tabName}</p>
                <div class="formio-errors invalid-feedback" ref="messageContainer"></div>        
              </div>
            `;
            fieldsetBody.prepend(newElement);
          }
        }
      }
    }
  });
}

document
  .querySelector(".formio-component-signature input")
  .addEventListener("input", function () {
    let inputValue = this.value; // Get the value from the input field
    document.querySelector(".custom-sign").innerHTML = inputValue;
  });

const builder = document.querySelector(".builder");

if (!builder) {
  // Call the function to set up form animations for the first time
  injectIconsForTaggedComponents(form, "options");
  injectDynamicContent(
    "ul.nav-tabs > li",
    ".card-body.tab-pane",
    ".fieldset-body",
  );

  const cardElement = document.querySelector(".card");

  let lastMutationTime = 0;

  const observer = new MutationObserver((mutationsList, observer) => {
    const currentTime = performance.now();

    for (const mutation of mutationsList) {
      if (currentTime - lastMutationTime > 100) {
        injectIconsForTaggedComponents(form, "options");
        injectDynamicContent(
          "ul.nav-tabs > li",
          ".card-body.tab-pane",
          ".fieldset-body",
        );
        bindHigherRiskTriggers();
      }
      lastMutationTime = currentTime;
    }
  });

  const config = {
    childList: true, // Watch for changes in child elements
    subtree: true, // Watch for changes in descendants
  };

  observer.observe(cardElement, config);

  $(".card")
    .on("input", "textarea", function () {
      $(this)
        .css("height", "auto")
        .css("height", this.scrollHeight + "px");
    })
    .find("textarea");
}

function callHigherRisk() {
  const container = document.querySelector(".preview") || document.body;

  if (document.getElementById("collab-modal")) return;

  const modal = document.createElement("div");
  modal.id = "collab-modal";
  modal.className = "collab-modal-overlay";

  const modalContent = document.createElement("div");
  modalContent.className = "collab-modal-content";

  modalContent.innerHTML = `
        <h3>Higher Risk factors</h3>
        <p>Higher risk factors include situations where the Applicant or Third Party/ies are:</p>
        <ul>
          <li>A person with a connection to an 'enhanced risk state' (as defined in the Jersey Financial Services Commission AML/CFT Handbook, Appendix D1)</li>
          <li>A person with a connection to a country identified as presenting higher risks (as defined in the Jersey Financial Services Commission AML/CFT Handbook, Appendix D2)</li>
          <li>A Politically Exposed Person (PEP) including an immediate family member or close associate of a PEP</li>
          <li>A resident of or a person connected with a sanctioned country</li>
          <li>A person who carries out, or whose source of funds or wealth derives from a 'sensitive activity' as defined by the Jersey Financial Services Commission in Table 2 of its Sensitive Business Practice Policy</li>
          <li>A person regarded as Higher Risk due to the presence of other risk factors.</li>
        </ul>
        <button id="collab-close-button" class="collab-modal-button">Close</button>
      `;

  modal.appendChild(modalContent);
  container.appendChild(modal);

  function closeModal() {
    modal.classList.add("collab-fade-out");
    modal.addEventListener("animationend", () => modal.remove(), {
      once: true,
    });
  }

  modalContent
    .querySelector("#collab-close-button")
    .addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) closeModal();
  });

  modalContent.addEventListener("click", (e) => e.stopPropagation());
}

function bindHigherRiskTriggers() {
  document.querySelectorAll(".higherRiskModal").forEach((el) => {
    if (!el.dataset.hrBound) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        callHigherRisk();
      });
      el.dataset.hrBound = "true";
    }
  });
}
