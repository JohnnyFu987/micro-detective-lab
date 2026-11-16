const caseGrid = document.querySelector("#case-grid");
const focusRange = document.querySelector("#focus-range");
const focusValue = document.querySelector("#focus-value");
const heroSlide = document.querySelector("#hero-slide");

function createTextElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createDetailBlock(label, text, className = "") {
  const block = document.createElement("div");
  block.className = `detail-block ${className}`.trim();
  block.append(createTextElement("h4", "", label));
  block.append(createTextElement("p", "", text));
  return block;
}

function renderCases() {
  if (!caseGrid || typeof CASE_DATA === "undefined") return;
  caseGrid.replaceChildren();

  CASE_DATA.forEach((item) => {
    const article = document.createElement("article");
    article.className = "case-card";
    article.id = item.id;
    article.style.setProperty("--case-accent", item.accent);

    const visual = document.createElement("div");
    visual.className = "case-visual";
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.alt;
    image.loading = "lazy";
    visual.append(image);
    visual.append(createTextElement("span", "case-stain", item.stain));

    const body = document.createElement("div");
    body.className = "case-body";
    body.append(createTextElement("p", "case-label", item.shortLabel));
    body.append(createTextElement("h3", "", item.title));
    body.append(createTextElement("p", "case-summary", item.summary));

    const question = createDetailBlock("觀察問題", item.prompt, "question-block");
    body.append(question);

    const clueId = `${item.id}-clue`;
    const answerId = `${item.id}-answer`;
    const actions = document.createElement("div");
    actions.className = "case-actions";

    const clueButton = document.createElement("button");
    clueButton.type = "button";
    clueButton.className = "case-button case-button-secondary";
    clueButton.textContent = "給我一個提示";
    clueButton.setAttribute("aria-expanded", "false");
    clueButton.setAttribute("aria-controls", clueId);

    const answerButton = document.createElement("button");
    answerButton.type = "button";
    answerButton.className = "case-button";
    answerButton.textContent = "揭曉觀察重點";
    answerButton.setAttribute("aria-expanded", "false");
    answerButton.setAttribute("aria-controls", answerId);
    actions.append(clueButton, answerButton);
    body.append(actions);

    const cluePanel = createDetailBlock("線索", item.clue, "reveal-panel clue-panel");
    cluePanel.id = clueId;
    cluePanel.hidden = true;

    const answerPanel = document.createElement("div");
    answerPanel.className = "reveal-panel answer-panel";
    answerPanel.id = answerId;
    answerPanel.hidden = true;
    answerPanel.append(createDetailBlock("觀察重點", item.answer));
    answerPanel.append(createDetailBlock("別忘了", item.caution, "caution-block"));
    body.append(cluePanel, answerPanel);

    const togglePanel = (button, panel, openText, closedText) => {
      const willOpen = panel.hidden;
      panel.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
      button.textContent = willOpen ? openText : closedText;
    };

    clueButton.addEventListener("click", () => {
      togglePanel(clueButton, cluePanel, "收起提示", "給我一個提示");
    });

    answerButton.addEventListener("click", () => {
      togglePanel(answerButton, answerPanel, "收起觀察重點", "揭曉觀察重點");
    });

    article.append(visual, body);
    caseGrid.append(article);
  });
}

function updateFocus() {
  if (!focusRange || !focusValue || !heroSlide) return;
  const value = Number(focusRange.value);
  const blur = Math.abs(7 - value) * 0.65;
  heroSlide.style.filter = `blur(${blur}px)`;
  focusValue.value = `清晰度 ${Math.max(10, 100 - Math.round(blur * 22))}%`;
}

focusRange?.addEventListener("input", updateFocus);
renderCases();
updateFocus();

