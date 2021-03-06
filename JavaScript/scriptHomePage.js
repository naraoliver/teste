/* Script Home page Desktop*/

const redirecionarHome = document.getElementById('home');
redirecionarHome.addEventListener("click", (e) => {
    if(redirecionarHome.href === "http://127.0.0.1:5500/projeto-restaurante/index.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/index.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarLogin = document.getElementById("login")
        redirecionarLogin.addEventListener("click", (e) => {
            if(redirecionarLogin.href == "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html"){
                window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html";
            }else{
                alert("Error")
                e.preventDefault();
            }
        });

const redirecionarCardapio = document.getElementById('cardapio');
redirecionarCardapio.addEventListener("click", (e) => {
    if(redirecionarCardapio.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarPratos = document.getElementById('pratos');
redirecionarPratos.addEventListener("click", (e) => {
    if(redirecionarPratos.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarReservas = document.getElementById('reservas');
redirecionarReservas.addEventListener("click", (e) => {
    if(redirecionarReservas.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarContatos = document.getElementById('contatos');
redirecionarContatos.addEventListener("click", (e) => {
    if(redirecionarContatos.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

/* Script Home page Mobile*/


const verificarMenu = document.getElementById('listaNavegacaoMobile');
const abrirBarraMenu = document.getElementById('abrirMenu');

abrirBarraMenu.addEventListener('click', () => {
    if(verificarMenu.style.display == 'flex'){
        verificarMenu.style.display = 'none'
    }else{
        verificarMenu.style.display = 'flex'
    }
});

const redirecionarHomeMobile = document.getElementById('homeMobile');
redirecionarHomeMobile.addEventListener("click", (e) => {
    if(redirecionarHomeMobile.href == "http://127.0.0.1:5500/projeto-restaurante/index.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/index.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarLoginMobile = document.getElementById("loginMobile")
        redirecionarLoginMobile.addEventListener("click", (e) => {
            if(redirecionarLoginMobile.href == "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html"){
                window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html";
            }else{
                alert("Error")
                e.preventDefault();
            }
        });

const redirecionarCardapioMobile = document.getElementById('cardapioMobile');
redirecionarCardapioMobile.addEventListener("click", (e) => {
    if(redirecionarCardapioMobile.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarPratosMobile = document.getElementById('pratosMobile');
redirecionarPratosMobile.addEventListener("click", (e) => {
    if(redirecionarPratosMobile.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarReservasMobile = document.getElementById('reservasMobile');
redirecionarReservasMobile.addEventListener("click", (e) => {
    if(redirecionarReservasMobile.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarContatosMobile = document.getElementById('contatosMobile');
redirecionarContatosMobile.addEventListener("click", (e) => {
    if(redirecionarContatosMobile.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});