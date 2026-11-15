import { homeTemplate, projectsTemplate, signupTemplate } from "./templates.js";
import { setupVolunteerForm } from "./formulario.js";

const app = document.querySelector("#app");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

const routes = {
  "#inicio": { title: "ONG Esperança | Início", render: homeTemplate },
  "#projetos": { title: "ONG Esperança | Projetos", render: projectsTemplate },
  "#cadastro": { title: "ONG Esperança | Seja voluntário", render: signupTemplate }
};

function renderRoute() {
  const route = routes[window.location.hash] || routes["#inicio"];
  document.title = route.title;
  app.innerHTML = route.render();
  setupVolunteerForm();
  app.focus({ preventScroll: true });
  menu?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

window.addEventListener("hashchange", renderRoute);
menuToggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

if (!window.location.hash) window.history.replaceState(null, "", "#inicio");
renderRoute();
