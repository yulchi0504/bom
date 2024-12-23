const translations = {
  hello: { en: "Hello", uz: "Salom", es: "Hola" },
  welcome: { en: "Welcome", uz: "Xush kelibsiz", es: "Bienvenido" },
  goodbye: { en: "Goodbye", uz: "Xayr", es: "Adiós" },
};

function translateText(text, lang) {
  return translations[text]?.[lang] || "Tarjima topilmadi";
}

document.getElementById("translateBtn").addEventListener("click", () => {
  const textInput = document.getElementById("textInput").value.toLowerCase();
  const languageSelect = document.getElementById("languageSelect").value;

  const translatedText = translateText(textInput, languageSelect);

  document.getElementById("translatedText").innerText = translatedText;
});
