// script pagina de login

document.addEventListener('DOMContentLoaded', () => {
    const cpf = document.querySelector('#cpf');
    const data = document.querySelector('#data');
    const entrar = document.querySelector('.btn-entrar')


entrar.addEventListener('click', () =>{
    const cpfValor = cpf.value.trim();
    const dataValor = data.value.trim();


    if (!cpfValor || !dataValor) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (cpfValor.length !== 10 || dataValor.length !== 8){
        alert('CPF ou Data de Nascimento Inválida')
        return  
    }

    alert('Logado com sucesso')
    window.location.href = 'index.html'
})

 // formatação de cpf
cpf.addEventListener('input', () => {
        // remove caracteres que não são numéricos
        let valor = cpf.value.replace(/\D/g, '');
        
        // limitando o número de caracteres a somente 11
        valor = valor.slice(0, 11);
        
        // aplicando a formatação de cpf
        if (valor.length > 0) {
            valor = valor.replace(/^(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
            valor = valor.replace(/\.(\d{3})(\d)/, '.$1-$2');
            valor = valor.replace(/\-(\d{2})(\d)/, '-$1$2');
        }
        
        cpf.value = valor;
    });

// formatação de data de nascimento
    data.addEventListener('input',() => {
        // remove caracteres que não são numéricos
        let valor = data.value.replace(/\D/g, '');
        
        // limitando o número de caracteres a somente 8
        valor = valor.slice(0, 8);
        
        // aplicando a formatação de data
        if (valor.length > 0) {
            valor = valor.replace(/^(\d{2})(\d)/, '$1/$2');
            valor = valor.replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
        }
        
        data.value = valor;
    });
});

const btnLogin = document.querySelector('.botao-login')

btnLogin.addEventListener('click', () =>{
    window.location.href = 'login.html'
})