const container = document.querySelector("#container");

function makeGrid() {
    for(let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.setAttribute("style", "height: 50px")
        row.setAttribute("class", "row");
        for(let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            row.appendChild(square);
            square.setAttribute("style", "border: 2px solid black; height: 100%; width: 100%");
            square.addEventListener("mouseover", () => {
                let rgb = [];
                for(let k = 0; k < 3; k++) {
                    rgb.push(Math.floor(Math.random() * 255))
                }
                square.style.backgroundColor = 'rgb('+ rgb.join(',') +')'
            })
        }
    }
}

makeGrid()