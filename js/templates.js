export function homeTemplate() {
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Juntos, podemos fazer a diferença</p>
        <h1>Pequenas atitudes constroem um futuro melhor.</h1>
        <p>A ONG Esperança é um projeto demonstrativo criado para apresentar iniciativas sociais e aproximar pessoas interessadas em ajudar.</p>
        <a class="button" href="#projetos">Conheça os projetos</a>
      </div>
      <div class="hero-art" role="img" aria-label="Ilustração abstrata de pessoas conectadas"></div>
    </section>
    <section class="section intro">
      <p class="eyebrow">Nossa proposta</p>
      <h2>Solidariedade que se transforma em ação</h2>
      <p>Este espaço reúne exemplos de ações comunitárias, divulgação de iniciativas e cadastro demonstrativo de pessoas voluntárias.</p>
    </section>`;
}

export function projectsTemplate() {
  const projects = [
    ["Educação para todos", "Apoio a atividades de leitura, reforço escolar e acesso ao conhecimento."],
    ["Rede de alimentos", "Mobilização comunitária para arrecadação e distribuição de alimentos."],
    ["Cuidado com a comunidade", "Ações coletivas para acolhimento, orientação e melhoria dos espaços locais."]
  ];
  return `
    <section class="page-heading">
      <p class="eyebrow">Nossas iniciativas</p>
      <h1>Projetos que aproximam pessoas</h1>
      <p>Conheça exemplos de frentes de atuação social apresentadas neste projeto acadêmico.</p>
    </section>
    <section class="cards section" aria-label="Lista de projetos">
      ${projects.map(([title, description]) => `
        <article class="card">
          <div class="card-mark" aria-hidden="true">+</div>
          <h2>${title}</h2>
          <p>${description}</p>
        </article>`).join("")}
    </section>`;
}

export function signupTemplate() {
  return `
    <section class="page-heading">
      <p class="eyebrow">Participe</p>
      <h1>Quero ser voluntário</h1>
      <p>Preencha os campos abaixo para simular um cadastro de interesse.</p>
    </section>
    <section class="form-wrap section">
      <form id="volunteer-form" class="form" novalidate>
        <label for="name">Nome completo</label>
        <input id="name" name="name" type="text" autocomplete="name" minlength="3" required>
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" autocomplete="email" required>
        <label for="phone">Telefone</label>
        <input id="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(11) 99999-9999" pattern="[0-9()\\s+-]{10,20}" required>
        <label for="area">Área de interesse</label>
        <select id="area" name="area" required>
          <option value="">Selecione uma opção</option>
          <option>Educação</option><option>Arrecadação</option><option>Ações comunitárias</option><option>Outra área</option>
        </select>
        <label class="check"><input name="consent" type="checkbox" required> Concordo com o uso demonstrativo dos dados neste exercício.</label>
        <button class="button" type="submit">Enviar cadastro</button>
        <p id="form-feedback" class="feedback" role="status" aria-live="polite"></p>
      </form>
      <p class="note">Demonstração acadêmica: os dados ficam armazenados apenas no navegador, usando localStorage. Não envie informações pessoais reais.</p>
    </section>`;
}
