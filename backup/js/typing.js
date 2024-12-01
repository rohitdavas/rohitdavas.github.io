/**
 * Typing Animation Module
 * This module handles the typing animation effect for code snippets
 * It loads sequences from a JSON file and types them out character by character
 */

class TypingAnimation {
    /**
     * Initialize the typing animation
     * @param {string} containerSelector - CSS selector for the container element
     */
    constructor(containerSelector = '.typing-container') {
        this.container = document.querySelector(containerSelector);
        this.sequences = [];
        this.currentLine = 0;
        this.settings = {
            typingSpeed: 1000,
            initialDelay: 500
        };
    }

    /**
     * Load sequence data from JSON file
     * @returns {Promise} Resolves when data is loaded
     */
    async loadSequences() {
        try {
            const response = await fetch('/js/typing-sequence.json');
            const data = await response.json();

            // let's log the data
            // console.log(data);
            
            if (!data || !data.sequences || data.sequences.length === 0) {
                throw new Error('No valid sequences found');
            }

            this.sequences = data.sequences;
            this.settings = { ...this.settings, ...data.settings };
            return true;
        } catch (error) {
            console.error('Error loading sequences:', error);
            return false;
        }
    }

    /**
     * Create and prepare all line elements
     */
    prepareDOMElements() {
        if (!this.container) return;
        
        // Clear existing content
        this.container.innerHTML = '';
        
        // Create all lines
        this.sequences.forEach(sequence => {
            const line = this.createLineElement(sequence.type === 'output' ? 'output' : 'code');
            line.textContent = '';
        });
    }

    /**
     * Type a single line character by character
     * @param {HTMLElement} lineElement - The line element to type into
     * @param {string} text - The text to type
     * @returns {Promise} Resolves when typing is complete
     */
    async typeLine(lineElement, text) {
        return new Promise(resolve => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    lineElement.textContent = text.substring(0, i + 1);
                    i++;
                } else {
                    clearInterval(typing);
                    resolve();
                }
            }, this.settings.typingSpeed / text.length);
        });
    }

    /**
     * Create a new line element
     * @param {string} type - Type of line (code/output)
     * @returns {HTMLElement} The created line element
     */
    createLineElement(type) {
        const line = document.createElement('div');
        line.className = type === 'output' ? 'output-line' : 'code-line';
        line.style.width = '100%';  // Set full width immediately
        this.container.appendChild(line);
        return line;
    }

    /**
     * Start the typing animation sequence
     */
    async startTyping() {
        if (!this.container || this.sequences.length === 0) return;

        const lines = this.container.querySelectorAll('.code-line, .output-line');
        
        // Type each line in sequence
        for (let i = 0; i < this.sequences.length; i++) {
            const line = lines[i];
            const sequence = this.sequences[i];
            await this.typeLine(line, sequence.content);
        }
    }

    /**
     * Initialize and start the typing animation
     */
    async init() {
        const success = await this.loadSequences();
        if (!success) return;

        this.prepareDOMElements();
        setTimeout(() => this.startTyping(), this.settings.initialDelay);
    }
}

// Initialize when DOM is ready and components are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for components to load before initializing typing animation
    const checkInterval = setInterval(() => {
        const container = document.querySelector('.typing-container');
        if (container) {
            clearInterval(checkInterval);
            console.log('Found typing container, initializing animation...');
            const typingAnimation = new TypingAnimation();
            typingAnimation.init();
        }
    }, 100); // Check every 100ms

    // Stop checking after 5 seconds to prevent infinite loop
    setTimeout(() => {
        clearInterval(checkInterval);
        console.warn('Typing container not found after 5 seconds');
    }, 5000);
});
