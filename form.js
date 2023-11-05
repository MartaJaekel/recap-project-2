const form = document.querySelector("[data-js='form']");
//HTML eleemnt das neue Question-Card anzeigt
const questionCardContainer = document.querySelector("[data-js='new-card']");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const { question, answer, tags } = form.elements;
    const card = document.createElement("div");
    card.classList.add("question-card");
    card.innerHTML = `
        <button class="bookmark" >
            <img class="image-bookmark" src="assets/bookmark-white.svg" alt="bookmark">
        </button>
        <h2>${question.value}</h2>
        <button class="button">Show Answer</button>
        <div class="answer hidden">
            <h3>${answer.value}</h3>
        </div>
        <div class="tags"></div>
    `
    questionCardContainer.appendChild(card);

    const tagsElements = document.querySelector('.tags');
    tags.value.split(',').forEach((tagText) => {
        const tag = document.createElement('span')
        tag.classList.add("tag");
        tag.innerHTML = tagText.trim();
        tagsElements.appendChild(tag)
    })
    form.reset();
});