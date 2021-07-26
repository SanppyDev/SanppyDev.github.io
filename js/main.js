var login = document.querySelector('.entrar');

function logador(){
    let loginBtn = document.querySelector('.login__btn');
    let loginBg = document.querySelector('.login__bg');
    loginBg.style.top = 0;
    function login(){
        let nome = document.getElementById('nome').value;
        let senha = document.getElementById('senha').value;
        if((nome == "UsuarioTeste") && (senha == "123")){
            window.location.href="html/documentos.html"
        }else{
            window.alert("Usuario ou senha incorretos!")
            document.getElementById('nome').value= "";
            document.getElementById('senha').value= "";
        }
    }
    loginBtn.addEventListener('click', login)
}



login.addEventListener('click', logador)


