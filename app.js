let form = document.querySelector("#form");
let input = document.querySelector("#inputId");
let table = document.querySelector(".table");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let tableOf = input.value;

    table.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        //console.log(tableOf + " x " + i + " =", tableOf * i);
        const message = `${tableOf} X ${i} = ${tableOf * i}`;

        table.innerHTML += `${message} <br>`;
    }
});
