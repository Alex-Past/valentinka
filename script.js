document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.magic-btn');
    const secretMessage = document.querySelector('.secret-message');
    const snowContainer = document.querySelector('.snowflakes');
    const heartsContainer = document.querySelector('.hearts');
    
    // Создаем снежинки
    for (let i = 0; i < 40; i++) {
        createSnowflake();
    }
    
    // Создаем сердечки
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
    
    // Обработчик кнопки
    button.addEventListener('click', function() {
        // Показываем секретное сообщение
        secretMessage.classList.add('show');
        
        // Меняем текст кнопки
        const btnText = button.querySelector('.btn-text');
        btnText.textContent = 'Желание загадано!';
        button.style.background = 'linear-gradient(to right, #a1c4fd, #c2e9fb)';
        
        // Создаем больше сердечек
        for (let i = 0; i < 30; i++) {
            setTimeout(() => createHeart(), i * 100);
        }
        
        // Добавляем эффект конфетти (пастельные цвета)
        createConfetti();
        
        // Добавляем мигающие огоньки
        createSparkles();
    });
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 8 + 4;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -30;
        const opacity = Math.random() * 0.5 + 0.3;
        
        snowflake.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            left: ${posX}%;
            top: -20px;
            opacity: ${opacity};
            animation: snowfall ${duration}s linear ${delay}s infinite;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        `;
        
        snowContainer.appendChild(snowflake);
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        
        const posX = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * -20;
        const size = Math.random() * 30 + 20;
        const hearts = ['❤️', '💖', '💕', '💗', '💓'];
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        
        heart.style.cssText = `
            position: absolute;
            font-size: ${size}px;
            left: ${posX}%;
            top: -50px;
            opacity: ${Math.random() * 0.6 + 0.3};
            animation: heartFall ${duration}s ease-in ${delay}s infinite;
        `;
        
        heart.textContent = randomHeart;
        heartsContainer.appendChild(heart);
    }
    
    function createConfetti() {
        const colors = ['#ffb6c1', '#c2e9fb', '#a1c4fd', '#fad0c4', '#d4a5a5'];
        
        for (let i = 0; i < 80; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background-color: ${color};
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                    top: -20px;
                    left: ${Math.random() * 100}%;
                    opacity: 0.8;
                    z-index: 1000;
                    animation: confettiFall ${Math.random() * 3 + 2}s ease-out forwards;
                `;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    }
    
    function createSparkles() {
        const container = document.querySelector('.container');
        
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: gold;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: 0;
                animation: sparkle 1.5s ease ${i * 0.1}s;
            `;
            
            container.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2000);
        }
    }
    
    // Добавляем CSS анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes snowfall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes heartFall {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
            100% { transform: translateY(100vh) rotate(${Math.random() * 720}deg); opacity: 0; }
        }
        
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 10px gold; }
        }
    `;
    document.head.appendChild(style);
    
    // Добавляем небольшую интерактивность для снежинок и сердечек
    document.addEventListener('click', function(e) {
        if (e.target.closest('.magic-btn')) return;
        
        // При клике в любом месте создаем небольшое сердечко
        const heart = document.createElement('div');
        heart.style.cssText = `
            position: fixed;
            font-size: 20px;
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            opacity: 0.9;
            z-index: 1000;
            animation: clickHeart 1s ease-out forwards;
        `;
        
        const hearts = ['❤️', '💖', '💕'];
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1000);
    });
    
    // Добавляем анимацию для клика
    const clickStyle = document.createElement('style');
    clickStyle.textContent = `
        @keyframes clickHeart {
            0% { transform: translateY(0) scale(1); opacity: 0.9; }
            100% { transform: translateY(-50px) scale(0.5); opacity: 0; }
        }
    `;
    document.head.appendChild(clickStyle);
});