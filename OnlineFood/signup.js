
function signUp(e) {
    let form = document.getElementById('form');
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let number = form.number.value;
    e.preventDefault()

    if (name == '' || email == '' || password == '' || number == '') {
        alert('All fields are require to fill');
        return;
    }
    let userdata = {
        name: name,
        email: email,
        password: password,
        number:number
    }

    let arr;
    arr = JSON.parse(localStorage.getItem('users'));
    if (arr == null) {
        arr = [];
    }
    arr.push(userdata);
    localStorage.setItem('users',JSON.stringify(arr))
}