
// function calculate() {
//     var principal = parseFloat(document.getElementById('principal').value);
//     var apy = parseFloat(document.getElementById('apy').value);
//     var duration = parseFloat(document.getElementById('duration').value);

//     var totalEarnings = principal * Math.pow(1 + apy / 100 / 365, 365 * duration);

//     // Display the total earnings
//     document.getElementById('totalEarnings').innerHTML = '$' + totalEarnings.toFixed(2);

//     // Convert total earnings to different time intervals
//     displayConvertedValues(totalEarnings);
// }

// function displayConvertedValues(totalEarnings) {
//     var minuteValue = totalEarnings / (365 * 24 * 60);
//     var hourlyValue = totalEarnings / (365 * 24);
//     var dailyValue = totalEarnings / 365;
//     var weeklyValue = totalEarnings / 52;
//     var monthlyValue = totalEarnings / 12;
//     var yearlyValue = totalEarnings;

//     // Display the converted values in the respective fields
//     document.getElementById('minuteValue').innerHTML = '$' + minuteValue.toFixed(2);
//     document.getElementById('hourlyValue').innerHTML = '$' + hourlyValue.toFixed(2);
//     document.getElementById('dailyValue').innerHTML = '$' + dailyValue.toFixed(2);
//     document.getElementById('weeklyValue').innerHTML = '$' + weeklyValue.toFixed(2);
//     document.getElementById('monthlyValue').innerHTML = '$' + monthlyValue.toFixed(2);
//     document.getElementById('yearlyValue').innerHTML = '$' + yearlyValue.toFixed(2);
// }

// function calculate() {
//     var principal = parseFloat(document.getElementById('principal').value);
//     var apy = parseFloat(document.getElementById('apy').value);
//     var duration = parseFloat(document.getElementById('duration').value);

//     var earnings = principal * Math.pow(1 + apy / 100, duration) - principal;
//     var futureValue = principal + earnings;

//     // Display the total interest and future value
//     document.getElementById('totalInterest').innerHTML =  earnings.toFixed(2);
//     document.getElementById('futureValue').innerHTML = futureValue.toFixed(2) ;
// console.log('duration', duration)
//     // Convert future value to different time intervals
//     displayConvertedValues(earnings);

// }

// function displayConvertedValues(earnings) {
//     var minuteValue = earnings / (365 * 24 * 60);
//     var hourlyValue = earnings / (365 * 24);
//     var dailyValue = earnings / 365;
//     var weeklyValue = earnings / 52;
//     var monthlyValue = earnings / 12;
//     var yearlyValue = earnings ;

//     // Display the converted values in the respective fields
//     document.getElementById('minuteValue').innerHTML = '$' + minuteValue.toFixed(2);
//     document.getElementById('hourlyValue').innerHTML = ' $' + hourlyValue.toFixed(2);
//     document.getElementById('dailyValue').innerHTML = '$' + dailyValue.toFixed(2);
//     document.getElementById('weeklyValue').innerHTML = '$' + weeklyValue.toFixed(2);
//     document.getElementById('monthlyValue').innerHTML = '$' + monthlyValue.toFixed(2);
//     document.getElementById('yearlyValue').innerHTML = ' $' + yearlyValue.toFixed(2);
// }
// function calculate() {
//     var principal = parseFloat(document.getElementById('principal').value);
//     var apy = parseFloat(document.getElementById('apy').value);
//     var duration = parseFloat(document.getElementById('duration').value);
//     // A = P * (1 + r/365)^(365t)

//     var earnings = principal * Math.pow(1 + apy / 100, duration) - principal;
//     var futureValue = principal + earnings;
  
//     // Display the total interest and future value
//     document.getElementById('totalInterest').innerHTML = earnings.toFixed(2);
//     document.getElementById('futureValue').innerHTML = futureValue.toFixed(2) ;
//   console.log('duration', duration)
//     // Convert future value to different time intervals
//     displayConvertedValues(earnings);
  
//   }
  
//   function displayConvertedValues(earnings) {
//     var minuteValue = earnings / (365 * 24 * 60);
//     var hourlyValue = earnings / (365 * 24);
//     var dailyValue = earnings / 365;
//     var weeklyValue = earnings / 52;
//     var monthlyValue = earnings / 12;
//     var yearlyValue = earnings ;
  
//     // Display the converted values in the respective fields
//     document.getElementById('minuteValue').innerHTML = '$' + minuteValue.toFixed(2);
//     document.getElementById('hourlyValue').innerHTML = ' $' + hourlyValue.toFixed(2);
//     document.getElementById('dailyValue').innerHTML = '$' + dailyValue.toFixed(2);
//     document.getElementById('weeklyValue').innerHTML = '$' + weeklyValue.toFixed(2);
//     document.getElementById('monthlyValue').innerHTML = '$' + monthlyValue.toFixed(2);
//     document.getElementById('yearlyValue').innerHTML = ' $' + yearlyValue.toFixed(2);
//   }
  
// function calculate() {
//     var principal = parseFloat(document.getElementById('principal').value);
//     var rate = parseFloat(document.getElementById('apy').value);
//     var duration = parseFloat(document.getElementById('duration').value);

//     // Simple Interest formula: SI = P * (r/100) * t
//     var earnings = (principal * rate * duration) / 100;
//     var futureValue = principal + earnings;

//     // Display the total interest and future value
//     document.getElementById('totalInterest').innerHTML = earnings.toFixed(2);
//     document.getElementById('futureValue').innerHTML = futureValue.toFixed(2);

//     // Convert future value to different time intervals
//     displayConvertedValues(earnings);
// }

// function displayConvertedValues(earnings) {
//     var minuteValue = earnings / (365 * 24 * 60);
//     var hourlyValue = earnings / (365 * 24);
//     var dailyValue = earnings / 365;
//     var weeklyValue = earnings / 52;
//     var monthlyValue = earnings / 12;
//     var yearlyValue = earnings;

//     // Display the converted values in the respective fields
//     document.getElementById('minuteValue').innerHTML = '$' + minuteValue.toFixed(2);
//     document.getElementById('hourlyValue').innerHTML = '$' + hourlyValue.toFixed(2);
//     document.getElementById('dailyValue').innerHTML = '$' + dailyValue.toFixed(2);
//     document.getElementById('weeklyValue').innerHTML = '$' + weeklyValue.toFixed(2);
//     document.getElementById('monthlyValue').innerHTML = '$' + monthlyValue.toFixed(2);
//     document.getElementById('yearlyValue').innerHTML = '$' + yearlyValue.toFixed(2);
// }
function calculate() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('apy').value);
    var duration = parseFloat(document.getElementById('duration').value);

    // Calculate earnings using the compound interest formula
    var earnings = (principal * rate * duration) / 100;
    var futureValue = principal + earnings;

    // Display the total interest and future value
    document.getElementById('totalInterest').innerHTML = earnings.toFixed(2);
    document.getElementById('futureValue').innerHTML = futureValue.toFixed(2);

    // Convert future value to different time intervals
    displayConvertedValues(principal, rate);
}

function displayConvertedValues(principal, rate) {
    // Fixed duration of 1
    var duration = 1;

    var earnings = principal * Math.pow(1 + rate / 100, duration) - principal;

    var minuteValue = earnings / (365 * 24 * 60);
    var hourlyValue = earnings / (365 * 24);
    var dailyValue = earnings / 365;
    var weeklyValue = earnings / 52;
    var monthlyValue = earnings / 12;
    var yearlyValue = earnings;

    // Display the converted values in the respective fields
    document.getElementById('minuteValue').innerHTML = '$' + minuteValue.toFixed(2);
    document.getElementById('hourlyValue').innerHTML = '$' + hourlyValue.toFixed(2);
    document.getElementById('dailyValue').innerHTML = '$' + dailyValue.toFixed(2);
    document.getElementById('weeklyValue').innerHTML = '$' + weeklyValue.toFixed(2);
    document.getElementById('monthlyValue').innerHTML = '$' + monthlyValue.toFixed(2);
    document.getElementById('yearlyValue').innerHTML = '$' + yearlyValue.toFixed(2);
}
