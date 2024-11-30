document.addEventListener('DOMContentLoaded', async function() {
    const container = document.querySelector('.typing-container');
    
    try {
        // Fetch and parse the JSON file
        const response = await fetch('/js/typing-sequence.json');
        const data = await response.json();
        
        if (!data || !data.sequences || data.sequences.length === 0) {
            console.error('No valid sequences found:', data);
            return;
        }
        
        // Clear existing content and create lines from sequence
        container.innerHTML = '';
        
        // Create all lines first
        data.sequences.forEach(sequence => {
            const line = document.createElement('div');
            line.className = `code-line${sequence.type === 'output' ? ' code-output' : ''}`;
            line.textContent = sequence.content;
            container.appendChild(line);
        });

        const lines = document.querySelectorAll('.code-line');
        let currentLine = 0;

        async function typeLine() {
            if (currentLine < lines.length) {
                const line = lines[currentLine];
                const sequence = data.sequences[currentLine];
                
                // Start typing animation
                line.classList.add('visible');
                
                // Simulate typing by incrementing visible length
                let visibleLength = 0;
                const typingInterval = setInterval(() => {
                    visibleLength += 1;
                    line.style.setProperty('--visible-length', visibleLength);
                    if (visibleLength >= line.textContent.length) {
                        clearInterval(typingInterval);
                    }
                }, data.settings.typingSpeed / line.textContent.length); // Adjust for smoother typing
                
                // Wait for typing to complete
                await new Promise(resolve => setTimeout(resolve, data.settings.typingSpeed));
                
                currentLine++;
                
                if (currentLine < lines.length) {
                    await new Promise(resolve => setTimeout(resolve, sequence.delay));
                    await typeLine();
                }
            }
        }

        // Start typing after initial delay
        setTimeout(() => typeLine(), 500);
        
    } catch (error) {
        console.error('Error in typing animation:', error);
    }
});
