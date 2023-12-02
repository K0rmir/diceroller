const result = document.getElementById("result");

const rollD4 = () => {
    const rolld4btn = document.getElementById("rolld4btn");
    let d4 = Math.ceil(Math.random() * 4);
    result.textContent = d4;
}

const rollD6 = () => {
    const rolld6btn = document.getElementById("rolld6btn");
    let d6 = Math.ceil(Math.random() * 6);
    result.textContent = d6;
}

const rollD8 = () => {
    const rolld8btn = document.getElementById("rolld8btn");
    let d8 = Math.ceil(Math.random() * 8);
    result.textContent = d8;
}

const rollD10 = () => {
    const rolld10btn = document.getElementById("rolld10btn");
    let d10 = Math.ceil(Math.random() * 10);
    result.textContent = d10;
}

const rollD12 = () => {
    const rolld12btn = document.getElementById("rolld12btn");
    let d12 = Math.ceil(Math.random() * 12);
    result.textContent = d12;
}

const rollD20 = () => {
    const rolld20btn = document.getElementById("rolld20btn");
    let d20 = Math.ceil(Math.random() * 20);
    result.textContent = d20;
}

rolld4btn.addEventListener("click", rollD4);
rolld6btn.addEventListener("click", rollD6);
rolld8btn.addEventListener("click", rollD8);
rolld10btn.addEventListener("click", rollD10);
rolld12btn.addEventListener("click", rollD12);
rolld20btn.addEventListener("click", rollD20);