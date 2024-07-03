const container = document.querySelector("#container");
container.setAttribute("style", "display: flex");

const button = document.querySelector("button");

function clickButton() {
    button.addEventListener("click", () => {
        x = prompt("Choose the number of squares");
            for(let i = 0; i < x; i++) {
                const row = document.createElement("div");
                    row.setAttribute("style", "border: 1px solid gray; display: flex; flex-direction: column; flex-grow: 1");
                    row.setAttribute("class", "row")
                    container.appendChild(row);
                        for(let j = 0; j < x; j++) {
                            const square = document.createElement("div");
                            square.setAttribute("style", "border: 1px solid gray; flex-grow: 1");
                            square.setAttribute("class", "square");
                            row.appendChild(square);
                            square.addEventListener("mouseover", () => {
                                let rgb = [];
                                for(let k = 0; k < 3; k++) {
                                    rgb.push(Math.floor(Math.random() * 255))
                                }
                                square.style.backgroundColor = 'rgb('+ rgb.join(',') +')'
                            })
                }
            }
    })
}

clickButton()