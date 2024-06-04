function showMessage(moment) {
    let messageContainer = document.getElementById('message-container');
    let messageText = document.getElementById('message-text');
    let messageImage = document.getElementById('message-image');
    let message = '';
    let imageUrl = '';

    switch(moment) {
        case 'moment1':
            message = 'Este é o nosso primeiro momento especial juntos. Eu lembro como se fosse ontem...';
            imageUrl = 'images/moment1.jpg'; // Substitua pelo caminho da sua imagem
            break;
        case 'moment2':
            message = 'O segundo momento foi ainda mais incrível. Nós rimos tanto nesse dia!';
            imageUrl = 'images/moment2.jpg'; // Substitua pelo caminho da sua imagem
            break;
        case 'moment3':
            message = 'O terceiro momento foi simplesmente mágico. Cada segundo foi perfeito.';
            imageUrl = 'images/moment3.jpg'; // Substitua pelo caminho da sua imagem
            break;
        case 'moment4':
            message = 'O quarto momento foi inesquecível. Lembro de cada detalhe com carinho.';
            imageUrl = 'images/moment4.jpg'; // Substitua pelo caminho da sua imagem
            break;
        case 'moment5':
            message = 'Nosso quinto momento foi o primeiro beijo. Lembro meus lábios encostando os seus bem suavemente.';
            imageUrl = 'images/moment5.jpg'; // Substitua pelo caminho da sua imagem
            break;
        case 'moment6':
            message = 'O sexto foi nosso primeiro dia dos namorados juntos.';
            imageUrl = 'images/moment6.jpg'; // Substitua pelo caminho da sua imagem
            break;
        // Adicione mais casos conforme necessário
        default:
            message = 'Selecione um momento para ver a mensagem.';
            imageUrl = '';
    }

    messageText.innerHTML = message;
    if (imageUrl) {
        messageImage.src = imageUrl;
        messageImage.style.display = 'block';
    } else {
        messageImage.style.display = 'none';
    }
}
