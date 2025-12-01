
let distanceEl = document.getElementById("distance");
let ageEl = document.getElementById("age");
let btnCreateEl = document.getElementById("create");
let nameInputEl = document.getElementById("nameInput")
let offerEl = document.getElementById("offer")

btnCreateEl.addEventListener("click", function(event) {
    event.preventDefault();
    let priceBase = distanceEl.value * 0.21;
    let price = 0;
    
    if (ageEl.value == "minor") {
        price = priceBase * 0.8;
        offerEl.textContent = "Offerta Minorenni"
    }else if (ageEl.value == "senior") {
        price = priceBase * 0.6;
        offerEl.textContent = "Offerta Senior"
    }else {
        price = priceBase;
        offerEl.textContent = "Offerta Standard"
    }
    let finalPrice = price.toFixed(2)
    let name = nameInputEl.value
    
    document.getElementById("finalPrice").textContent = `${finalPrice} €`;
    document.getElementById("name").textContent = `${name}`
})

