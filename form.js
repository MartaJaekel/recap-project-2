const form = document.querySelector("[data-js='form']");
const questionCard = document.querySelector("[data-js='question-cards']");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const { question, answer, tags } = form.elements;
    const card = document.createElement("div");
    card.classList.add("question-cards");

    card.innerHTML = `
            <p>Question: ${question.value}</p>
            <p>Answer: ${answer.value}</p>
            <p>Tags: ${tags.value}</p>
        `;
        questionCard.appendChild(card);
    form.reset();

});