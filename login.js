const cpf = document.querySelector('#cpf');
const data = document.querySelector('#data');
const entrar = document.querySelector('.botao-entrar');

entrar.addEventListener('click', () => {
    const cpfValor = cpf.value.trim();
    const dataValor = data.value.trim();

    if (!cpfValor || !dataValor) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (cpfValor.length !== 14 || dataValor.length !== 10) {
        alert('CPF ou Data de Nascimento Inválida');
        return;
    }

    alert('Logado com sucesso');
    window.location.href = 'index.html';
});

// formatação de cpf
cpf.addEventListener('input', () => {
    // remove caracteres que não são numéricos
    let inputCpf = cpf.value.replace(/\D/g, '');

    // limitando o número de caracteres a somente 11
    inputCpf = inputCpf.slice(0, 11);

    // aplicando a formatação de cpf
    if (inputCpf.length > 0) {
        inputCpf = inputCpf.replace(/^(\d{3})(\d)/, '$1.$2');
        inputCpf = inputCpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
        inputCpf = inputCpf.replace(/\.(\d{3})(\d)/, '.$1-$2');
        inputCpf = inputCpf.replace(/\-(\d{2})(\d)/, '-$1$2');
    }

    cpf.value = inputCpf;
});

// formatação de data de nascimento
data.addEventListener('input', () => {
    // remove caracteres que não são numéricos
    let inputData = data.value.replace(/\D/g, '');

    // limitando o número de caracteres a somente 8
    inputData = inputData.slice(0, 8);

    // aplicando a formatação de data
    if (inputData.length > 0) {
        inputData = inputData.replace(/^(\d{2})(\d)/, '$1/$2');
        inputData = inputData.replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
    }

   data.value = inputData;
});
