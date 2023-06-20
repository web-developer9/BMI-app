const height = document.getElementById('height')
const weight = document.getElementById('weight')
const bmi_score = document.getElementById('bmi')
const result_weight = document.getElementById('result')

let height_cal
let weight_cal
let total_cal
calc.addEventListener('click', function() {
   
    height_cal = (height.value/100)*(height.value/100)
    weight_cal = weight.value
    total_cal = (weight_cal/height_cal).toFixed(2)
    bmi_score.textContent = total_cal

    if (total_cal < 18.5){
        result_weight.textContent = "Underweight"
        result_weight.style.color = 'red'
    }
    if (total_cal < 24.9 & total_cal > 18.5) {
        result_weight.textContent = "Healthy weight"
        result_weight.style.color = 'green'
    }
    if (total_cal > 25  & total_cal < 29.9) {
        result_weight.textContent = "Over weight"
        result_weight.style.color = 'orangered'
    }
    if (total_cal > 30) {
        result_weight.textContent = "Obesity"
        result_weight.style.color = 'orangered'
    }
    


})