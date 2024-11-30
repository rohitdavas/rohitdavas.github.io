document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.code-line');
    const cursor = document.querySelector('.typing-cursor');
    let currentLine = 0;

    function updateCursorPosition() {
        const activeLine = document.querySelector('.code-line.typing');
        if (activeLine) {
            const lineRect = activeLine.getBoundingClientRect();
            const containerRect = document.querySelector('.typing-container').getBoundingClientRect();
            cursor.style.top = `${lineRect.top - containerRect.top}px`;
            cursor.style.left = `${lineRect.left - containerRect.left + activeLine.offsetWidth}px`;
        }
    }

    function typeLine() {
        if (currentLine < lines.length) {
            lines[currentLine].classList.add('typing');
            
            const typingDuration = 2000; // 2 seconds per line
            const lineDelay = 500; // 0.5 second delay between lines
            
            // Update cursor position during typing
            const cursorInterval = setInterval(updateCursorPosition, 50);
            
            setTimeout(() => {
                clearInterval(cursorInterval);
                currentLine++;
                if (currentLine < lines.length) {
                    setTimeout(typeLine, lineDelay);
                }
            }, typingDuration);
        }
    }

    // Start typing
    typeLine();
});
