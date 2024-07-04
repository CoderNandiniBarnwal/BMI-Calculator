const gender_option = ["Male", "Female", "Other"]

document.addEventListener("DOMContentLoaded", () => {
    const gender_optionDropdown = document.getElementById("gender");
    populateDropdown(gender_optionDropdown, gender_option);
});

function populateDropdown(Dropdown, option) {  //Dropdown function
    Dropdown.innerHTML = '';

    option.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.text = option;
        Dropdown.add(opt);
    });
}

function calculateBMI() {
    const height_Input = document.getElementById("height");
    const weight_Input = document.getElementById("weight");
    const age_Input = document.getElementById("age");
    const gender_optionDropdown = document.getElementById("gender");
    const resultContainer = document.getElementById("result");

    const height = parseFloat(height_Input.value);
    const weight = parseFloat(weight_Input.value);
    const age = parseFloat(age_Input.value);

    if (isNaN(height) || isNaN(weight) || isNaN(age) || height < 0 || weight < 0 || age < 0) {
        alert("Please fill all the necessary details");
        event.preventDefault();
    }

    const BMI = weight / ((height / 100) ** 2);
    resultContainer.innerText = `Your BMI is ${BMI}`;
    if (BMI > 0 && BMI <= 18) {
        resultContainer.innerText = `Underweight as ${BMI} `;
    }
    else if (BMI > 18 && BMI < 25) {
        resultContainer.innerText = `Moderateweight as ${BMI}`;
    }
    else if (BMI >= 25 && BMI < 30) {
        resultContainer.innerText = `Overweight as ${BMI}`;
    }
    else if (BMI >= 30 && BMI < 40) {
        resultContainer.innerText = `Obesity as ${BMI}`;
    }
    else if (BMI >= 40) {
        resultContainer.innerText = `Severe obesity as ${BMI}`;
    }
    return BMI;
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";//For clearity betwaeen class
}