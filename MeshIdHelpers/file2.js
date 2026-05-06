function showModal() {
  // Create overlay
  const modal = document.createElement('div');
  modal.classList.add('definitions-overlay');

  // Create modal box
  const modalContent = document.createElement('div');
  modalContent.classList.add('definitions-modal');

  modalContent.innerHTML = `
    <style>
      .definitions-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.55);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        animation: defs-fade-in 0.2s ease forwards;
      }

      @keyframes defs-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .definitions-modal {
        width: 650px;
        max-width: 90%;
        max-height: 80vh;
        background: #1c1c1c;
        padding: 24px 28px;
        border-radius: 14px;
        box-shadow: 0 8px 26px rgba(0,0,0,0.4);
        overflow-y: auto;
        color: #fff;
        animation: defs-scale-in 0.25s ease forwards;
      }

      @keyframes defs-scale-in {
        from { opacity: 0; transform: scale(0.92); }
        to { opacity: 1; transform: scale(1); }
      }

      .defs-title {
        font-size: 18px;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 6px;
        color: #fff;
      }

      .defs-text {
        font-size: 14px;
        line-height: 1.55;
        margin-bottom: 12px;
        color: #ddd;
      }

      .defs-list {
        font-size: 14px;
        line-height: 1.55;
        margin-bottom: 20px;
        padding-left: 20px;
        color: #ddd;
      }
    </style>
    <div>
      <p>This section requires details of all key account parties in relation to the Applicant.</p>
      <p><strong>Key account parties are:</strong></p>
      <ul>
        <li>All Directors and persons having senior management positions of the Applicant, whether individuals or corporate entities; any individuals having a senior management position means those who have and exercise strategic decision-taking powers or who have and exercise executive control.</li>
        <li>Any beneficial owner or controller of the Applicant; namely: – any person holding a material controlling ownership interest in the Applicant, whether by direct or indirect holdings or voting rights or who exerts control through other ownership interests (e.g., shareholders); or, if no such person exists, any person who exerts control over the Applicant through other means (e.g., through close personal connections); or, if no such person, any person who exercises control of the Applicant through positions held (e.g., Directors and persons having senior management positions) and, if any person identified above is not an individual, each individual who is that person's beneficial owner or controller with ultimate control of the Applicant (by applying the same three criteria).</li>
      </ul>

      <p><strong>Material Controlling Ownership Interest means:</strong></p>
      <ul>
        <li>Persons who hold a material controlling ownership interest in the capital of the Applicant through direct or indirect holdings of interests or voting rights, or who exert control through other ownership means.</li>
        <li>Individuals who exert control through other means (for example personal connections, by participating in financing, through close family relationships, as a result of historical or contractual associations or as a result of default on certain payments).</li>
        <li>If no individual is otherwise identified, individuals who exercise control of the Applicant through positions held (who have or exercise strategic decision-taking powers or who have and exercise executive control through senior management positions). Material controlling interest in capital is generally set at 10%.</li>
      </ul>
    </div>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Close when clicking background (not content)
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  function closeModal() {
    modal.style.animation = 'defs-fade-out 0.2s ease forwards';
    setTimeout(() => modal.remove(), 180);
  }
}


showModal()