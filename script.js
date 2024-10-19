function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    
    const numberOfHearts = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
    
        heart.style.left = Math.random() * 100 + 'vw'; 
      
        heart.style.top = Math.random() * 100 + 'vh';  
      
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

setInterval(createHeart, 150);

const envelope = document.getElementById('envelope');
const cardContent = document.getElementById('card-content');

envelope.addEventListener('click', () => {
    envelope.classList.add('opened');

    setTimeout(() => {
        cardContent.classList.remove('hidden');
    }, 500);
});
