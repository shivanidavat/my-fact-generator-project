const facts = [
    "I love hiking in the mountains.",
    "I enjoy skiing during the winter.",
    "The beach is my favorite vacation spot."
];

const factsList = document.getElementById('facts-list');
const addFactBtn = document.getElementById('add-fact-btn');

function displayFacts() {
    factsList.innerHTML = '';
    facts.forEach((fact, index) => {
        const li = document.createElement('li');
        li.textContent = fact;
        factsList.appendChild(li);
    });
}

addFactBtn.addEventListener('click', () => {
    const newFact = prompt("Enter a new fun fact:");
    if (newFact) {
        facts.push(newFact);
        displayFacts();
    }
});

// Initial display of facts
displayFacts();
