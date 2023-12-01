const result = document.getElementById("result");


const rollD6 = () => {
    const rolld6btn = document.getElementById("rolld6btn");
    let d6 = Math.ceil(Math.random() * 6);
    console.log(d6);
    result.textContent = d6;
}

rolld6btn.addEventListener("click", rollD6);
