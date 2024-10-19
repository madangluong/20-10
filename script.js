// Tạo hiệu ứng trái tim bay lên từ khắp màn hình
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Random vị trí trái tim trên chiều ngang (viewport width)
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random thời gian bay lên

    heartContainer.appendChild(heart);

    // Xoá trái tim sau khi hoàn thành animation
    setTimeout(() => {
        heart.remove();
    }, 5000); // Thời gian animation là 5 giây
}

// Tạo nhiều trái tim mỗi 200ms
setInterval(createHeart, 200);
