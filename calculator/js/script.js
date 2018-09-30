function insert(num){
  document.form.textview.value = document.form.textview.value+num;
}
function equal() {
  var exp = document.form.textview.value;
  if(exp){
    document.form.textview.value = eval(exp);
  }
}
function reset() {
  document.form.textview.value = '';
}
function sqrt() {
  let num = document.form.textview.value;
  document.form.textview.value = Math.sqrt(num);
}
function proc() {
  let num = document.form.textview.value;
  document.form.textview.value = eval(num) / 100;
}
function pm() {
  let num = document.form.textview.value;
  if (num < 0){
    num = Math.abs(num);
  } else if (num >= 0) {
    num *= -1;
  }
  document.form.textview.value = num;
}
