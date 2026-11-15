import { saveVolunteer } from "./storage.js";

export function setupVolunteerForm() {
  const form = document.querySelector("#volunteer-form");
  if (!form) return;

  const feedback = document.querySelector("#form-feedback");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent = "";

    if (!form.reportValidity()) {
      feedback.textContent = "Confira os campos obrigatórios antes de enviar.";
      feedback.className = "feedback error";
      return;
    }

    const data = new FormData(form);
    const volunteer = {
      name: String(data.get("name")).trim(),
      email: String(data.get("email")).trim(),
      phone: String(data.get("phone")).trim(),
      area: String(data.get("area")).trim()
    };

    if (volunteer.name.length < 3) {
      feedback.textContent = "Informe um nome com pelo menos 3 caracteres.";
      feedback.className = "feedback error";
      return;
    }

    saveVolunteer(volunteer);
    form.reset();
    feedback.textContent = "Cadastro demonstrativo salvo neste navegador. Obrigado por participar!";
    feedback.className = "feedback success";
  });
}
