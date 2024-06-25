const container = document.querySelector("#container");

function makeRows() {
    for(let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.setAttribute("style", "border: 2px solid red; height: 50px");
        row.setAttribute("class", "row");
        for(let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.textContent = i;
            row.appendChild(square);
            square.setAttribute("style", "border: 2px solid black; height: 100%; width: 100%")
        }
    }
}

makeRows()

// ("style", "border: 2px solid red; height: 50px; width: 50px; margin: 0");