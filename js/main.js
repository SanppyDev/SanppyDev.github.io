var login = document.querySelector('.entrar');

function logador(){
    login.addEventListener('click', ()=>{
        let loginBtn = document.querySelector('.login__btn');
        let login = document.querySelector('.login');
        let loginClose= document.querySelector('.close')
        
        login.style.display = "flex";
        loginClose.addEventListener('click', ()=> {
            login.style.display = "none";
        })
            
        
        loginBtn.addEventListener('click', ()=>{
            let nome = document.getElementById('nome').value;
            let senha = document.getElementById('senha').value;
            if((nome == "UsuarioTeste") && (senha == "123")){
                window.location.href="html/documentos.html"
            }else{
                window.alert("Usuario ou senha incorretos!")
                document.getElementById('nome').value= "";
                document.getElementById('senha').value= "";
            }
        })
    })
}


logador()

