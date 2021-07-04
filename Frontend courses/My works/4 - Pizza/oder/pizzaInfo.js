(function () {
    let pizzas = {
        "texas": 25,
        "barbecue": 15,
        "carbonara": 35,
        "bavarian": 30,
        "provence": 20
    };

    let toppingsPrise = {
        "mozzarella": 2,
        "mushrooms": 1,
        "ham": 3,
        "pepperoni": 4,
        "sausage": 3,
        "bacon": 5,
        "blackOlives": 4,
        "greenPeppers": 2
    };

    var pizzaPrise = 0;
    var sizePrise = -1;
    var toppingPrise = 0;
    var countPizza = 1;
    var sizes;
    var toppings;
    var isValid = true;
    var myMessage;

    window.onsubmit = function (e) {
        if (!e) e = window.event;
        isValid = true;
        let messageText;
        if (pizzaPrise == 0) {
            validationError(e, "Please choose a pizza!");
            return;
        }
        if (sizePrise < 0) {
            validationError(e, "Please choose a pizza size!");
            return;
        }

        for (let i = 0; i < pizzaForm.elements.length; i++) {
            if (pizzaForm.elements[i].type != "text") continue;

            let pattern = pizzaForm.elements[i].dataset.value;
            let val = pizzaForm.elements[i].value;
            let check = val.search(pattern);
            if (check == -1) {
                isValid = false
                messageText = pizzaForm.elements[i].dataset.errorMessage;
                break;
            }
        };

        if (!isValid) {
            validationError(e, messageText);
        }
    };

    function validationError(e, text) {
        myMessage.innerHTML = text;
        e.preventDefault();
    };

    window.onload = function () {
        myMessage = document.getElementById("myMessage");

        pizzaForm.pizza.onchange = pizzaChange;
        pizzaForm.quantity.onchange = countChange;
        pizzaForm.clientNname.onchange = clientNnameChange;
        pizzaForm.clientPhone.onchange = clientPhoneChange;
        pizzaForm.clientAddress.onchange = clientAddressChange;

        sizes = document.getElementsByName("pizzaSize");
        for (let i = 0; i < sizes.length; i++) {
            sizes[i].onclick = pizzaSizeClick;
        }
        toppings = document.getElementsByClassName("toppingClass");
        for (let i = 0; i < toppings.length; i++) {
            toppings[i].onclick = toppingsClick;
        }
    };

    function pizzaChange(e) {
        if (!e) e = window.event;
        let val = this.value;
        pizzaPrise = 0;
        if (val == "choose") {
            prise = 0;
            for (let i = 0; i < sizes.length; i++) {
                sizes[i].setAttribute("disabled", "disabled");
            }
            for (let i = 0; i < toppings.length; i++) {
                toppings[i].setAttribute("disabled", "disabled");
            }
        }
        else {
            let prise = pizzas[val];
            pizzaPrise = prise;
            for (let i = 0; i < sizes.length; i++) {
                sizes[i].removeAttribute("disabled");
                let newPrise = prise;
                switch (sizes[i].value) {
                    case "Medium":
                        newPrise += 10;
                        break;
                    case "Big":
                        newPrise += 20;
                        break;
                }
                let id = sizes[i].name + sizes[i].value;
                document.getElementById(id).innerHTML = sizes[i].value + " ($" + newPrise + ")";
            }
            for (let i = 0; i < toppings.length; i++) {
                toppings[i].removeAttribute("disabled");
            }
            myMessage.innerHTML = null;
        };
        showOrderInfo();
    };

    function pizzaSizeClick(e) {
        if (!e) e = window.event;
        switch (this.value) {
            case "Medium":
                sizePrise = 10;
                break;
            case "Big":
                sizePrise = 20;
                break;
            default:
                sizePrise = 0;
                break;
        }
        myMessage.innerHTML = null;
        showOrderInfo();
    };

    function toppingsClick(e) {
        if (!e) e = window.event;
        let val = this.name;
        let prise = toppingsPrise[val];
        let isCheck = this.checked;
        if (this.checked) {
            toppingPrise += toppingsPrise[val];
        }
        else {
            toppingPrise -= toppingsPrise[val];
        };
        showOrderInfo();
    };

    function countChange(e) {
        if (!e) e = window.event;
        countPizza = +this.value;
        showOrderInfo();
    }

    function clientNnameChange(e) {
        if (!e) e = window.event;
        myMessage.innerHTML = null;
        showOrderInfo();
    }
    function clientPhoneChange(e) {
        if (!e) e = window.event;
        myMessage.innerHTML = null;
        showOrderInfo();
    }
    function clientAddressChange(e) {
        if (!e) e = window.event;
        myMessage.innerHTML = null;
        showOrderInfo();
    }
    function showOrderInfo() {
        if (sizePrise >= 0) {
            let orderSum = (pizzaPrise + sizePrise + toppingPrise) * countPizza;
            document.getElementById("orderSum").innerHTML = "Order sum: " + orderSum;
        };
        if (pizzaForm.clientNname.value) {
            document.getElementById("name").innerHTML = "Name: " + pizzaForm.clientNname.value;
        }
        else {
            document.getElementById("name").innerHTML = null;
        }
        if (pizzaForm.clientPhone.value) {
            document.getElementById("phone").innerHTML = "Phone: " + pizzaForm.clientPhone.value;
        }
        else {
            document.getElementById("phone").innerHTML = null;
        }
        if (pizzaForm.clientAddress.value) {
            document.getElementById("address").innerHTML = "Address: " + pizzaForm.clientAddress.value;
        }
        else {
            document.getElementById("address").innerHTML = null;
        }
    };
})()
