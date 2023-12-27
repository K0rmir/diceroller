const result = document.getElementById("result");
const modifierMinus = document.getElementById("modifierMinus");
const modifierPlus = document.getElementById("modifierPlus");
const modifierNum = document.getElementById("modifierNum");
const quantityMinus = document.getElementById("quantityMinus");
const quantityPlus = document.getElementById("quantityPlus");
const quantityNum = document.getElementById("quantityNum");
const rollBreakdown = document.getElementById("rollBreakdown");
const rolls = document.getElementById("rolls");
let modifier = 0;
let quantity = 1;
let diceRolls = [];

// Event Listeners for modifiers //

// Modifer Minus //
modifierMinus.addEventListener("click", function() {
    if (modifier <= 0) {
        modifier--;
        modifierNum.textContent = modifier;
    } else if (modifier > 0) {
        modifier--;
        modifierNum.textContent = `+ ${modifier}`;
    }
});
// Modifier Plus //
modifierPlus.addEventListener("click", function() {
    if (modifier >= 0) {
        modifier++;
        modifierNum.textContent = `+  ${modifier}`
    } else if (modifier < 0){
        modifier++;
        modifierNum.textContent = modifier;
    }
});

// Quantity Minus //
quantityMinus.addEventListener("click", function() {
    if (quantity === 1) {
        quantityNum.textContent = quantity;
    } else if (quantity > 1){
        quantity--;
        quantityNum.textContent = `+ ${quantity}`
    }
});
// Quantity Plus //
quantityPlus.addEventListener("click", function() {
    if (quantity >= 1) {
        quantity++;
        quantityNum.textContent = `+ ${quantity}`
    }
});

// Functions for rolling each dice and returning a number.  //

const rollD4 = () => {
    const rolld4btn = document.getElementById("rolld4btn");
    return Math.ceil(Math.random() * 4); 
};

const rollD6 = () => {
    const rolld6btn = document.getElementById("rolld6btn");
    let d6 = Math.ceil(Math.random() * 6);
    result.textContent = d6 + modifier;
    rollBreakdown.textContent = `You rolled: ${d6} + ${modifier}`;
}

const rollD8 = () => {
    const rolld8btn = document.getElementById("rolld8btn");
    let d8 = Math.ceil(Math.random() * 8);
    result.textContent = d8 + modifier;
    rollBreakdown.textContent = `You rolled: ${d8} + ${modifier}`;
}

const rollD10 = () => {
    const rolld10btn = document.getElementById("rolld10btn");
    let d10 = Math.ceil(Math.random() * 10);
    result.textContent = d10 + modifier;
    rollBreakdown.textContent = `You rolled: ${d10} + ${modifier}`;
}

const rollD12 = () => {
    const rolld12btn = document.getElementById("rolld12btn");
    let d12 = Math.ceil(Math.random() * 12);
    result.textContent = d12 + modifier;
    rollBreakdown.textContent = `You rolled: ${d12} + ${modifier}`;
}

const rollD20 = () => {
    const rolld20btn = document.getElementById("rolld20btn");
    let d20 = Math.ceil(Math.random() * 20);
    result.textContent = d20 + modifier;
    rollBreakdown.textContent = `You rolled: ${d20} + ${modifier}`;
}

// Event listeners for each die roll //

rolld4btn.addEventListener("click", function() {
    diceRolls.length = 0;
    total = 0;
    for (let i = 0; i < quantity; i++) {
        let roll = rollD4();
        diceRolls.push(roll);
        total += roll;
    }
    total = total + modifier;
    let resultsText = `You Rolled ${quantity} d4 ${modifier}:`;
    let rollsText = `${diceRolls.join(", ")}`
    result.textContent = total;
    rollBreakdown.textContent = resultsText;
    rolls.textContent = rollsText
    console.log(diceRolls);
    console.log(total);

});


rolld6btn.addEventListener("click", rollD6);
rolld8btn.addEventListener("click", rollD8);
rolld10btn.addEventListener("click", rollD10);
rolld12btn.addEventListener("click", rollD12);
rolld20btn.addEventListener("click", rollD20);