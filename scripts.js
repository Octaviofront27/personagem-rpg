const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.getElementById('numbers');
const list = document.querySelector('.list');


let active = 0;
const total= items.length;
let timer;

function update(direction){
    const currentItem = document.querySelector('.item.active');
    const currentDot = document.querySelector('.dot.active');
    
    // Remove a classe active do elemento atual
    currentItem.classList.remove('active');
    currentDot.classList.remove('active');
    
    // Calcula o próximo item
    active += direction;
    if(active >= total){
        active = 0;
    }
    if(active < 0){
        active = total - 1;
    }
    
    // Adiciona a classe active ao próximo item imediatamente
    items[active].classList.add('active');
    dots[active].classList.add('active');
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

// Função para avançar automaticamente
function autoSlide() {
    update(1);
}

// Inicia o timer para trocar a cada 10 segundos
function startAutoSlide() {
    timer = setInterval(autoSlide, 10000); // 10000ms = 10 segundos
}

// Para o timer quando usuário interage
function stopAutoSlide() {
    clearInterval(timer);
}

// Reinicia o timer após interação
function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}


prevButton.addEventListener('click', () =>{
    // Feedback visual imediato
    prevButton.style.transform = 'scale(0.9)';
    prevButton.style.backgroundColor = 'rgba(255, 107, 53, 0.6)';
    
    update(-1);
    resetAutoSlide(); // Reseta o timer quando usuário clica
    
    // Remove o feedback após 150ms
    setTimeout(() => {
        prevButton.style.transform = '';
        prevButton.style.backgroundColor = '';
    }, 150);
})

nextButton.addEventListener('click', () =>{
    // Feedback visual imediato
    nextButton.style.transform = 'scale(0.9)';
    nextButton.style.backgroundColor = 'rgba(255, 107, 53, 0.6)';
    
    update(1);
    resetAutoSlide(); // Reseta o timer quando usuário clica
    
    // Remove o feedback após 150ms
    setTimeout(() => {
        nextButton.style.transform = '';
        nextButton.style.backgroundColor = '';
    }, 150);
})

// Adiciona eventos aos dots para clique
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        document.querySelector('.item.active').classList.remove('active');
        document.querySelector('.dot.active').classList.remove('active');
        
        active = index;
        items[active].classList.add('active');
        dots[active].classList.add('active');
        numberIndicator.textContent = String(active + 1).padStart(2, '0');
        
        resetAutoSlide(); // Reseta o timer quando usuário clica
    });
});

// Inicia o slideshow automático quando a página carrega
startAutoSlide();