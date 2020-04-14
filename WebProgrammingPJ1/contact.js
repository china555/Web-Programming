function submit() {
    // var name = document.getElementById('nameid');
    var email = document.getElementById('email_id');
    var phone = document.getElementById('phone_id');
    // var info = document.getElementById('send_info');
    var form = document.getElementById('myModal');
    var span = document.getElementsByClassName("close-1")[0];
    var message = document.getElementsByClassName('modal-body')[0];
    form.style.display = "block";
    message.innerHTML = `<p>Your message is already sent. <br>I will contact you back to you by <br>E-mail: ${email.value}</br> or Mobile Phone: ${phone.value}</p>`;
    span.onclick = function () {
        form.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == form) {
            form.style.display = "none";
        }
    }
}