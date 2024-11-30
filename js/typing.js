document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.typing-container');
    const lines = document.querySelectorAll('.code-line');
    
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'typing-cursor';
    container.appendChild(cursor);
    
    let currentLine = 0;
    
    function updateCursorPosition() {
        const activeLine = lines[currentLine];
        if (activeLine) {
            const lineRect = activeLine.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            cursor.style.left = `${activeLine.offsetWidth}px`;
            cursor.style.top = `${lineRect.top - containerRect.top}px`;
            
            // Change cursor color for output line
            if (activeLine.classList.contains('code-output')) {
                cursor.classList.add('at-output');
            } else {
                cursor.classList.remove('at-output');
            }
        }
    }

    function typeLine() {
        if (currentLine < lines.length) {
            // Start cursor animation for current line
            const cursorInterval = setInterval(updateCursorPosition, 50);
            
            // After typing animation completes
            setTimeout(() => {
                clearInterval(cursorInterval);
                currentLine++;
                if (currentLine < lines.length) {
                    setTimeout(typeLine, 500); // Delay before next line
                }
            }, 2000); // Match with CSS animation duration
        }
    }

    // Start typing after a short delay
    setTimeout(typeLine, 500);
});
