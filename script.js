const saveButton = document.getElementById("save");
const removeButton = document.getElementById("remove");


function displaySavedName() {
    const title = document.querySelector("h1");
    const savedName = localStorage.getItem("name");
    if (savedName !== null) {
        title.textContent = `Saved Name: ${savedName}`;
    } else {
        title.textContent = "Default";
    }
}


saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("Input").value;
    if (name) {
        localStorage.setItem("name", name);
        displaySavedName();
    }
});


removeButton.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("name");
    displaySavedName();
});


displaySavedName();


let counter = sessionStorage.getItem("counter") ? parseInt(sessionStorage.getItem("counter")) : 0;

        // Funzione per aggiornare il contatore ogni secondo
        function updateCounter() {
            counter++;
            document.getElementById("counter").textContent = counter;
            sessionStorage.setItem("counter", counter); // Salva il valore aggiornato in sessionStorage
        }

        // Aggiorna il contatore ogni secondo
        setInterval(updateCounter, 1000);