

// function 
//get values
// calculate
// output

// bmi formula weight/height squares 



function calculateBmi() {
    let weight = document.getElementById ("weight").value
    let height = document.getElementById ("height").value

    let bmi = (weight/(height*height))

    document.getElementById("heading").innerHTML = "your BMI is:"
    document.getElementById("bmi-output").innerHTML = bmi.toFixed(1)
    
    if (bmi < 18.5){
        document.getElementById("message").innerHTML = "You are underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("message").innerHTML = "You are healthy weight"
    } else if (bmi = 25.0 && bmi <= 29.9) {
        document.getElementById("message").innerHTML = "You are overweight"
    } else {
        document.getElementById("message").innerHTML = "You are obese"
    }
    
}
