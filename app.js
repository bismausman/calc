var displayInput = document.getElementById('displayinput');
function getval(val) {
    displayInput.value += val;
    // console.log(displayInput)
}
function calc() {

    var a = displayInput.value = eval(displayInput.value);

}
function clearAll() {

    displayInput.value = '';
}