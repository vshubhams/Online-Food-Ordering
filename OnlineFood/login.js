function logIn(e) {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("users"));
    
    let form = document.getElementById('form');
    let email = form.email.value;
    let password = form.password.value;

    if (email == '' || password == '') {
        alert('All fields are require to fill');
        return;
    }
    
    data.forEach(function (el) {
        if (el.email == email&&el.password==password) {
            alert('Login Successfully')
            window.location.href='menu.html'
        } 
    })


}