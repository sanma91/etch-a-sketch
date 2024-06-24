const container = document.querySelector("#container");

for(let i = 0; i < 256; i++) {
    const square = document.createElement("p");
    square.textContent = i
    container.appendChild(square);
    square.setAttribute("style", "border: 2px solid red; height: 50px; width: 50px; margin: 0");
}