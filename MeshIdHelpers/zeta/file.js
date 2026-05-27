(function () {
  const container = instance.element;
  if (!container) return;

  if (container.getAttribute("data-other-logic-attached")) {
    return;
  }
  container.setAttribute("data-other-logic-attached", "true");

  const OTHER_VALUE = "other";

  const getAllCheckboxes = () =>
    Array.from(container.querySelectorAll('input[type="checkbox"]'));

  const getOtherOption = () =>
    container.querySelector(`input[type="checkbox"][value="${OTHER_VALUE}"]`);

  function applyOtherLogic(changedCheckbox) {
    const all = getAllCheckboxes();
    const otherOption = getOtherOption();
    if (!otherOption) return;

    if (changedCheckbox === otherOption) {
      if (otherOption.checked) {
        all.forEach((cb) => {
          if (cb !== otherOption && cb.checked) {
            cb.checked = false;
            cb.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
      }
    } else {
      if (changedCheckbox.checked && otherOption.checked) {
        otherOption.checked = false;
        otherOption.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }

  container.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
      applyOtherLogic(e.target);
    }
  });

  const otherOption = getOtherOption();
  if (otherOption && otherOption.checked) {
    getAllCheckboxes().forEach((cb) => {
      if (cb !== otherOption && cb.checked) {
        cb.checked = false;
        cb.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
  }
})();
