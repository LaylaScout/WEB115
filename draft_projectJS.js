const monBreakfast = document.getElementById("breakfast");
const monSnack1 = document.getElementById("snack1");
const monLunch = document.getElementById("lunch");
const monSnack2 = document.getElementById("snack2");
const monDinner = document.getElementById("dinner");

const createButton = document.getElementById("create");

createButton.addEventListener("click", createMealPlan);
function createMealPlan () {

    console.log(monBreakfast.value);
    console.log(monSnack1.value);
    console.log(monLunch.value);
    console.log(monSnack2.value);
    console.log(monDinner.value);
};

const printButton = document.getElementById("print");

printButton.addEventListener("click", printMealPlan);

function printMealPlan() {
    window.print();
};

const displayButton = document.getElementById("display");
displayButton.addEventListener("click", displayMealPlan);

function displayMealPlan () {

    mealPlan = document.getElementById("myForm").value;
    text = ("<html>\n<head>\n<title>\n<head>\n<body>\n");
    text += ("Here is your customized meal plan!" + mealPlan);
    text += ("</body>\n</html>");
    let newWindow = window.open("", "Your Meal Plan", "width=400, height= 200, left=200, top=200");
    
    newWindow.document.write(text);
};

