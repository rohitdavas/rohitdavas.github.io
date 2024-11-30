// Theme handling
class ThemeManager {
    constructor() {
        this.themeToggleBtn = document.getElementById('theme-toggle-btn');
        this.moonIcon = '<i class="fas fa-moon"></i>';
        this.sunIcon = '<i class="fas fa-sun"></i>';
        
        // Initialize theme from localStorage or system preference
        this.initializeTheme();
        
        // Add event listener for theme toggle
        this.themeToggleBtn?.addEventListener('click', () => this.toggleTheme());
    }

    initializeTheme() {
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
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update button icon
        if (this.themeToggleBtn) {
            this.themeToggleBtn.innerHTML = theme === 'dark' ? this.sunIcon : this.moonIcon;
        }
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
