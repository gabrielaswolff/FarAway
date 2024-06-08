document.addEventListener('DOMContentLoaded', (event) => {
    const inicio = document.getElementById('inicio');
    inicio.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.addEventListener('click', () => {
        window.location.href = 'carrinho.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const canetaGpt = document.getElementById('canetaGpt');
    canetaGpt.addEventListener('click', () => {
        window.location.href = 'caneta.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const dimensionFly = document.getElementById('dimensionFly');
    dimensionFly.addEventListener('click', () => {
        window.location.href = 'dimension.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const pedrasGigaSize = document.getElementById('pedrasGigaSize');
    pedrasGigaSize.addEventListener('click', () => {
        window.location.href = 'pedras.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const gnomos = document.getElementById('gnomos');
    gnomos.addEventListener('click', () => {
        window.location.href = 'gnomos.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const camiseta = document.getElementById('camiseta');
    camiseta.addEventListener('click', () => {
        window.location.href = 'camiseta.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const strogonoff = document.getElementById('strogonoff');
    strogonoff.addEventListener('click', () => {
        window.location.href = 'strogonoff.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const babyTee = document.getElementById('babyTee');
    babyTee.addEventListener('click', () => {
        window.location.href = 'babyTee.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const vacina = document.getElementById('vacina');
    vacina.addEventListener('click', () => {
        window.location.href = 'vacina.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    celular = document.getElementById('celular');
    celular.addEventListener('click', () => {
        window.location.href = 'celular.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    cascalho = document.getElementById('cascalho');
    cascalho.addEventListener('click', () => {
        window.location.href = 'cascalho.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    pocaoAmor = document.getElementById('pocaoAmor');
    pocaoAmor.addEventListener('click', () => {
        window.location.href = 'pocaoAmor.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    dois = document.getElementById('dois');
    dois.addEventListener('click', () => {
        window.location.href = 'dois.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    adicionarC = document.getElementById('adicionarC');
    adicionarC.addEventListener('click', () => {
        window.location.href = 'carrinho.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    pagInicial = document.getElementById('pagInicial');
    pagInicial.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    comprar = document.getElementById('comprar');
    comprar.addEventListener('click', () => {
        window.location.href = 'comprar.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    voltar = document.getElementById('voltar');
    voltar.addEventListener('click', () => {
        window.history.back();
    });
});

document.getElementById('checkout-container').style.display = 'block';

function redirecionarPagina(event) {
    event.preventDefault();

    document.getElementById('checkout-container').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'flex';

    setTimeout(() => {
        window.location.href = 'pagina-de-sucesso.html';
    }, 4000); 
}

document.getElementById('checkout-form').addEventListener('submit', redirecionarPagina);
