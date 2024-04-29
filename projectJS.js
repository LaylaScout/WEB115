document.addEventListener('DOMContentLoaded', variableList);

function variableList () {
    const monBreakfast = document.getElementById("breakfast");
    const monSnack1 = document.getElementById("snack1");
    const monLunch = document.getElementById("lunch");
    const monSnack2 = document.getElementById("snack2");
    const monDinner = document.getElementById("dinner");

    const tueBreakfast = document.getElementById("breakfast");
    const tueSnack1 = document.getElementById("snack1");
    const tueLunch = document.getElementById("lunch");
    const tueSnack2 = document.getElementById("snack2");
    const tueDinner = document.getElementById("dinner");

    const wedBreakfast = document.getElementById("breakfast");
    const wedSnack1 = document.getElementById("snack1");
    const wedLunch = document.getElementById("lunch");
    const wedSnack2 = document.getElementById("snack2");
    const wedDinner = document.getElementById("dinner");

    const thuBreakfast = document.getElementById("breakfast");
    const thuSnack1 = document.getElementById("snack1");
    const thuLunch = document.getElementById("lunch");
    const thuSnack2 = document.getElementById("snack2");
    const thuDinner = document.getElementById("dinner");

    const friBreakfast = document.getElementById("breakfast");
    const friSnack1 = document.getElementById("snack1");
    const friLunch = document.getElementById("lunch");
    const friSnack2 = document.getElementById("snack2");
    const friDinner = document.getElementById("dinner");

    const satBreakfast = document.getElementById("breakfast");
    const satSnack1 = document.getElementById("snack1");
    const satLunch = document.getElementById("lunch");
    const satSnack2 = document.getElementById("snack2");
    const satDinner = document.getElementById("dinner");

    const sunBreakfast = document.getElementById("breakfast");
    const sunSnack1 = document.getElementById("snack1");
    const sunLunch = document.getElementById("lunch");
    const sunSnack2 = document.getElementById("snack2");
    const sunDinner = document.getElementById("dinner");
};

const createButton = document.getElementById("create");

createButton.addEventListener("click", createMealPlan);

function createMealPlan () {
    console.log(monBreakfast.value);
    console.log(monSnack1.value);
    console.log(monLunch.value);
    console.log(monSnack2.value);
    console.log(monDinner.value);

    console.log(tueBreakfast.value);
    console.log(tueSnack1.value);
    console.log(tueLunch.value);
    console.log(tueSnack2.value);
    console.log(tueDinner.value);

    console.log(wedBreakfast.value);
    console.log(wedSnack1.value);
    console.log(wedLunch.value);
    console.log(wedSnack2.value);
    console.log(wedDinner.value);

    console.log(thuBreakfast.value);
    console.log(thuSnack1.value);
    console.log(thuLunch.value);
    console.log(thuSnack2.value);
    console.log(thuDinner.value);

    console.log(friBreakfast.value);
    console.log(friSnack1.value);
    console.log(friLunch.value);
    console.log(friSnack2.value);
    console.log(friDinner.value);

    console.log(satBreakfast.value);
    console.log(satSnack1.value);
    console.log(satLunch.value);
    console.log(satSnack2.value);
    console.log(satDinner.value);

    
    console.log(sunBreakfast.value);
    console.log(sunSnack1.value);
    console.log(sunLunch.value);
    console.log(sunSnack2.value);
    console.log(sunDinner.value);
};

const name_entry = document.getElementById("name").value;
const email = document.getElementById("email").value;
const goal = document.getElementById("goal").value;

if (checkEmail(email)) {
    createMealPlan();
} else {
    alert('Error. Need to enter correct email address.')
};

const printButton = document.getElementById("print");

printButton.addEventListener("click", printMealPlan);

function printMealPlan() {
    window.print();
};

const displayButton = document.getElementById("display");
displayButton.addEventListener("click", displayMealPlan);

function displayMealPlan() {
    const displayWindow = window.open("",'Your Meal Plan', "width=400, height= 200, left=200, top=200");
    
    displayMealPlan.document.write('<html><head><title>Your Meal Plan</title>');
    displayMealPlan.document.write('<style>');
    displayMealPlan.document.wrirte('font-family: monospace');
    displayMealPlan.document.wrirte('</style></head><body>');

    displayMealPlan.document.write('<h1>User Contact Info:</h1>');
    displayMealPlan.document.write('<p>Name: ' + name_entry.value + '</p>');
    displayMealPlan.document.write('<p>Email: ' + email.value + '</p>');
    displayMealPlan.document.write('<p>Goal: ' + goal.value + '</p>');
    
    displayMealPlan.document.write('<h2>Your Meal Plan</h2>');
    displayMealPlan.document.write('<p>Monday:\n' + monBreakfast.value + '\n' + monSnack1.value + '\n' + monLunch.value + '\n' + monSnack2.value + '\n' + monDinner.value + '</p>');
    displayMealPlan.document.write('<p>Tuesday:\n' + tueBreakfast.value + '\n' + tueSnack1.value + '\n' + tueLunch.value + '\n' + tueSnack2.value + '\n' + tueDinner.value + '</p>');
    displayMealPlan.document.write('<p>Wednesday:\n' + wedBreakfast.value + '\n' + wedSnack1.value + '\n' + wedLunch.value + '\n' + wedSnack2.value + '\n' + wedDinner.value + '</p>');
    displayMealPlan.document.write('<p>Thursday:\n' + thuBreakfast + '\n' + thuSnack1.value + '\n' + thuLunch.value + '\n' + thuSnack2.value + '\n' + thuDinner.value + '</p>');
    displayMealPlan.document.write('<p>Friday:\n' + friBreakfast.value + '\n' + friSnack1.value + '\n' + friLunch.value + '\n' + friSnack2.value + '\n' + friDinner.value + '</p>');
    displayMealPlan.document.write('<p>Saturday:\n' + satBreakfast.value + '\n' + satSnack1.value + '\n' + satLunch.value + '\n' + satSnack2.value + '\n' + satDinner.value + '</p>');
    displayMealPlan.document.write('<p>Sunday:\n' + sunBreakfast.value + '\n' + sunSnack1.value + '\n' + sunLunch.value + '\n' + sunSnack2.value + '\n' + sunDinner.value + '</p>');

    displayMealPlan.document.write('</body></html>');
    displayMealPlan.document.close();

function checkEmail(email) {
    const email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email_validation.test(email);
    }
};


