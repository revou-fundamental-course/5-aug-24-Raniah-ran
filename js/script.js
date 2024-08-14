<script>
function calculateBMI() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  if (height === "" || isNaN(height) || weight === "" || isNaN(weight)) {
    document.getElementById("result").innerHTML = "Please enter valid height and weight.";
    return;
  }
  var bmi = weight / ((height / 100) ** 2);
  var category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}
</script>