function myFunc() {
 var birth = document.getElementById('birthday').value;
 var currenT = new Date ().getFullYear ();
  var birthdYear = new Date(birth).getFullYear();
  var birthdMonth = new Date(birth).getMonth() + 1;
  var birthdDay = new Date(birth).getDate();
  var calcyear = currenT - birthdYear;
 document.getElementById('oldyear').innerHTML = calcyear;
  var currenD = new Date ().getTime ();
  var birthDD = new Date(birth).getTime ();
  var calcday = currenD - birthDD;
  var rezulT = Math.floor (calcday / 8.64e7);
  document.getElementById('days').innerHTML = rezulT;
  var roundCalc = Math.ceil(rezulT / 1000) * 1000;
  document.getElementById('round').innerHTML = roundCalc;
  var n = roundCalc - rezulT;
  var dayCalc = new Date();
  dayCalc.setDate(dayCalc.getDate() + n);
  var curr_date = dayCalc.getDate();
  var curr_month = dayCalc.getMonth() + 1;
  var curr_year = dayCalc.getFullYear();
  var dd;
  if (curr_month <= 9) {
    dd = curr_date + "-0" + curr_month + "-" + curr_year;
  } else {
    dd = curr_date + "-" + curr_month + "-" + curr_year;
  }
  document.getElementById('dayround').innerHTML = dd;
  var date = new Date();
  var thisMonth = date.getMonth() + 1;
  var resMonth;
  if (birthdMonth < thisMonth) {
    resMonth = 12 - thisMonth + birthdMonth;
  } else if (birthdMonth > thisMonth) {
    resMonth = birthdMonth - thisMonth;
  }
  var day = date.getDate();
  var resultDay = birth - date;
  document.getElementById('hBirthdDay').innerHTML = resMonth + ' месяцев' ;
}
