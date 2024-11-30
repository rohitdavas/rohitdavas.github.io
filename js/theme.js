// Theme handling
class ThemeManager {
    constructor() {
        // Initialize properties
        this.moonIcon = '<i class="fas fa-moon"></i>';
        this.sunIcon = '<i class="fas fa-sun"></i>';
        
        // Wait for components to load before initializing
        this.initializeWhenReady();
    }

    initializeWhenReady() {
        // Check if button exists, if not wait for components to load
        const checkButton = () => {
            const button = document.getElementById('theme-toggle-btn');
            if (button) {
                this.themeToggleBtn = button;
                this.initialize();
            } else {
                // Check again in 100ms
                setTimeout(checkButton, 100);
            }
        };
        checkButton();
    }

    initialize() {
        try {
            // Initialize theme from localStorage or system preference
            this.initializeTheme();
            
            // Add event listener for theme toggle
            this.themeToggleBtn?.addEventListener('click', () => this.toggleTheme());
            
            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', e => {
                    if (!localStorage.getItem('theme')) {
                        this.setTheme(e.matches ? 'dark' : 'light');
                    }
                });
        } catch (error) {
            console.error('Error initializing theme:', error);
        }
    }

    initializeTheme() {
        try {
            // Check localStorage first
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                this.setTheme(savedTheme);
                return;
            }

            // Check system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.setTheme('dark');
            } else {
                this.setTheme('light');
            }
        } catch (error) {
            console.error('Error in initializeTheme:', error);
            // Default to light theme if there's an error
            this.setTheme('light');
        }
    }

    setTheme(theme) {
        try {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Update button icon
            if (this.themeToggleBtn) {
                this.themeToggleBtn.innerHTML = theme === 'dark' ? this.sunIcon : this.moonIcon;
            }
        } catch (error) {
            console.error('Error setting theme:', error);
        }
    }

    toggleTheme() {
        try {
            const currentTheme = localStorage.getItem('theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
        } catch (error) {
            console.error('Error toggling theme:', error);
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
