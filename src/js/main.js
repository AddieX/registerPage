document.addEventListener("DOMContentLoaded", function () {
  const languageLinks = document.querySelectorAll(".language-dropdown a");
  const languageBtn = document.querySelector(".language-btn");

  // RTL languages
  const rtlLanguages = ["ar"];

  // Flag mapping
  const flagMap = {
    en: "us",
    fr: "fr",
    es: "es",
    de: "de",
    ar: "iq",
    zh: "cn",
    ja: "jp",
    ru: "ru",
    pt: "pt",
    it: "it",
  };

  // Function to apply language
  function applyLanguage(lang) {
    // Remove active class from all links
    languageLinks.forEach((l) => l.classList.remove("active"));

    // Add active class to selected language link
    document
      .querySelector(`.language-dropdown a[data-lang="${lang}"]`)
      .classList.add("active");

    // Update button text with flag
    const flagCode = flagMap[lang] || lang;
    languageBtn.innerHTML = `<span class="flag-icon flag-icon-${flagCode}"></span> ${lang.toUpperCase()} <span class="arrow">▼</span>`;

    // Set language attribute on HTML element
    document.documentElement.setAttribute("lang", lang);

    // Set RTL if needed
    if (rtlLanguages.includes(lang)) {
      document.documentElement.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
      document.querySelector(".copyright").classList.add("rtl-footer");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.body.classList.remove("rtl");
      document.querySelector(".copyright").classList.remove("rtl-footer");
    }

    // Update all text elements with translations
    document.querySelectorAll("[data-" + lang + "]").forEach((el) => {
      if (
        el.tagName === "INPUT" &&
        (el.type === "submit" || el.type === "reset")
      ) {
        el.value = el.getAttribute("data-" + lang);
      } else {
        el.innerHTML = el.getAttribute("data-" + lang);
      }
    });

    // Save language preference to localStorage
    localStorage.setItem("preferredLanguage", lang);
  }

  // Check for saved language preference or set default to English
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    applyLanguage(savedLanguage);
  } else {
    // Explicitly set English as default if no preference is saved
    applyLanguage("en");
  }

  // Add click event listeners to language links
  languageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      applyLanguage(lang);
    });
  });
});
