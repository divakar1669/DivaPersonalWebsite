import { portfolio } from "./content.js";

const byId = (id) => document.getElementById(id);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const linkAttrs = 'target="_blank" rel="noopener noreferrer"';

function renderNav() {
  byId("brandName").textContent = portfolio.meta.shortName;
  byId("navLinks").innerHTML = portfolio.nav
    .map((item) => `<a href="#${item.target}">${escapeHtml(item.label)}</a>`)
    .join("");
}

function renderHero() {
  const hero = portfolio.hero;
  byId("hero").innerHTML = `
    <div class="hero-copy">
      <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
      <h1>${escapeHtml(hero.title)}</h1>
      <p class="hero-summary">${escapeHtml(hero.summary)}</p>
      <div class="chip-row">
        ${hero.highlights.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
      <div class="hero-actions">
        <a class="button primary" href="${portfolio.meta.resumeUrl}" ${linkAttrs}>
          ${escapeHtml(hero.primaryCta)}
        </a>
        <a class="button secondary" href="#contact">${escapeHtml(hero.secondaryCta)}</a>
      </div>
    </div>
    <aside class="hero-card" aria-label="Profile summary">
      <img class="profile-photo" src="${portfolio.meta.profileImage}" alt="${portfolio.meta.name}">
      <div>
        <p class="profile-name">${escapeHtml(portfolio.meta.name)}</p>
        <p class="profile-role">${escapeHtml(portfolio.meta.role)}</p>
        <p class="profile-location">${escapeHtml(portfolio.meta.location)}</p>
      </div>
    </aside>
  `;
}

function renderAbout() {
  byId("about").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">About</p>
      <h2>${escapeHtml(portfolio.about.heading)}</h2>
    </div>
    <div class="about-grid">
      <p class="about-copy">${escapeHtml(portfolio.about.body)}</p>
      <div class="stat-grid">
        ${portfolio.about.stats
          .map(
            (stat) => `
              <div class="stat-card">
                <strong>${escapeHtml(stat.value)}</strong>
                <span>${escapeHtml(stat.label)}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderExperience() {
  byId("experience").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Career</p>
      <h2>Work Experience</h2>
    </div>
    <div class="experience-list">
      ${portfolio.experience
        .map(
          (job) => `
            <article class="experience-card">
              <div class="experience-content">
                <div class="experience-company-row">
                  <div class="company-logo">
                    ${
                      job.logo
                        ? `<img src="${job.logo}" alt="${escapeHtml(job.company)} logo">`
                        : `<span>${escapeHtml(job.logoText || job.company.slice(0, 2))}</span>`
                    }
                  </div>
                  <div class="company-meta">
                    <p>${escapeHtml(job.company)}</p>
                    <span>${escapeHtml(job.location)}</span>
                  </div>
                  <time>${escapeHtml(job.period)}</time>
                </div>
                <h3>${escapeHtml(job.title)}</h3>
                <p class="muted">${escapeHtml(job.description)}</p>
                <ul>
                  ${job.responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
                <div class="tool-row">
                  ${job.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}
                </div>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderEducation() {
  byId("education").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Education</p>
      <h2>Academic Info</h2>
    </div>
    <div class="education-grid">
      ${portfolio.education
        .map(
          (item) => `
            <article class="education-card">
              <span>${escapeHtml(item.period)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.institution)}</p>
              <p>${escapeHtml(item.board)}</p>
              <strong>${escapeHtml(item.score)}</strong>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSkills() {
  byId("skills").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Stack</p>
      <h2>Skills and Profiles</h2>
    </div>
    <div class="skills-layout">
      <div class="skill-groups">
        ${portfolio.skills
          .map(
            (group) => `
              <article class="skill-card">
                <h3>${escapeHtml(group.title)}</h3>
                <div class="skill-icons">
                  ${group.items
                    .map(
                      (item) => `
                        <div class="skill-icon">
                          <img src="${item.icon}" alt="${escapeHtml(item.name)}">
                          <span>${escapeHtml(item.name)}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="profile-links">
        ${portfolio.profiles
          .map(
            (profile) => `
              <a class="profile-link-card" href="${profile.url}" ${linkAttrs}>
                <img src="${profile.image}" alt="${escapeHtml(profile.label)}">
                <span>${escapeHtml(profile.label)}</span>
                <p>${escapeHtml(profile.text)}</p>
              </a>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderBooks() {
  byId("books").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Reading</p>
      <h2>My Book Shelf</h2>
    </div>
    <div class="book-sections">
      ${portfolio.books
        .map(
          (group) => `
            <article class="book-group">
              <h3>${escapeHtml(group.category)}</h3>
              <div class="book-row">
                ${group.items
                  .map(
                    (book) => `
                      <figure class="book-card">
                        <img src="${book.image}" alt="${escapeHtml(book.title)}">
                        <figcaption>${escapeHtml(book.title)}</figcaption>
                      </figure>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderContact() {
  const fields = portfolio.contact.formFields;
  byId("contact").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Contact</p>
      <h2>${escapeHtml(portfolio.contact.heading)}</h2>
    </div>
    <div class="contact-grid">
      <form class="contact-form" action="${portfolio.contact.formAction}" method="post">
        <label>
          <span>${escapeHtml(fields.name)}</span>
          <input type="text" name="Name" required>
        </label>
        <label>
          <span>${escapeHtml(fields.email)}</span>
          <input type="email" name="Email" required>
        </label>
        <label>
          <span>${escapeHtml(fields.subject)}</span>
          <input type="text" name="Subject" required>
        </label>
        <label>
          <span>${escapeHtml(fields.message)}</span>
          <textarea name="Message" rows="5"></textarea>
        </label>
        <button class="button primary" type="submit">${escapeHtml(fields.submit)}</button>
      </form>
      <aside class="contact-card">
        <p>${escapeHtml(portfolio.meta.location)}</p>
        <a href="mailto:${portfolio.meta.email}">${escapeHtml(portfolio.meta.email)}</a>
        <a href="tel:+917395902123">${escapeHtml(portfolio.meta.phone)}</a>
        <address>${escapeHtml(portfolio.meta.address)}</address>
        <div class="social-links">
          ${portfolio.social
            .map(
              (item) => `
                <a href="${item.url}" ${linkAttrs} aria-label="${escapeHtml(item.label)}">
                  <img src="${item.icon}" alt="">
                </a>
              `
            )
            .join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderFooter() {
  byId("footer").innerHTML = `
    <p>${escapeHtml(portfolio.footer.text)}</p>
    <a href="#contact">${escapeHtml(portfolio.footer.contactPrompt)}</a>
  `;
}

function setupThemeToggle() {
  const toggle = byId("themeToggle");
  const icon = byId("themeIcon");

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    icon.name = isDark ? "sunny-outline" : "moon-outline";
  });
}

function init() {
  document.title = portfolio.meta.title;
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderEducation();
  renderSkills();
  renderBooks();
  renderContact();
  renderFooter();
  setupThemeToggle();
}

init();
