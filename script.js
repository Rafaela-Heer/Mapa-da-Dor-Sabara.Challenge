// redirecionamento para página de login

const botaoLogar = document.querySelector('.botao-login');

botaoLogar.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// ir para o topo da página atráves do footer

const seta = document.querySelector('#seta')

seta.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// validações no formulário de contato

const enviar = document.querySelector('.botao-contato')
const formulario = document.querySelector('.formulario-contato')

enviar.addEventListener('click', ()=>{
    const nome = document.querySelector('#nome').value.trim()
    const telefone = document.querySelector('#telefone').value.trim()
    const mensagem = document.querySelector('#mensagem').value.trim()
    const email = document.querySelector('#email').value.trim()
    if(!nome || !email || !telefone || !mensagem){
        alert('Por favor preencha todos os campos!')
        return
    }
    alert(
        `Mensagem enviada com sucesso!\n\n` +
        `Nome: ${nome}\n` +
        `Telefone: ${telefone}\n` +
        `Email: ${email}\n\n`+
        `Mensagem: ${mensagem}`
    );
    formulario.reset()
})

// permitir somente números no input de telefone
const inputTel = document.querySelector('#telefone')

inputTel.addEventListener('input', ()=>{
    let valorInput = inputTel.value.replace(/\D/g, '')
    inputTel.value = valorInput
})

// flip card na seção de dashboard

// lista de imagens para os artigos do dashboard
const cardImg = [
    './IMAGES/dash-img-1.png', './IMAGES/dash-img-2.png', './IMAGES/dash-img-3.png', './IMAGES/dash-img-4.png'
]
// efeito de flip dos artigos do dashboard
const cardsDashboard = document.querySelectorAll('.artigo-dashboard')

cardsDashboard.forEach((card, index) => {
    const conteudoOriginal = card.innerHTML;
    card.dataset.conteudoOriginal = conteudoOriginal;

    card.addEventListener('click', () => {
        if (card.dataset.state === 'frente') {
            card.innerHTML = `<img src="${cardImg[index]}" class="card-img">`;
            card.dataset.state = 'tras';
            card.classList.add('virado');
        } else {
            card.innerHTML = card.dataset.conteudoOriginal;
            card.dataset.state = 'frente';
            card.classList.remove('virado');
        }
    });
});


