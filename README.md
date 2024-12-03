# Personal Portfolio Website

This is my personal portfolio website built with React and deployed using GitHub Pages. Visit the live site at [rohitdavas.github.io](https://rohitdavas.github.io).

## Technology Stack

- React.js
- Styled Components
- GitHub Pages

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/rohitdavas/rohitdavas.github.io.git
cd rohitdavas.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will run in development mode at [http://localhost:3000](http://localhost:3000).

## Deployment with GitHub Pages

This website is deployed using GitHub Pages. The deployment process is automated using the `gh-pages` package.

### Setup GitHub Pages

1. Install gh-pages if not already installed:
```bash
npm install --save gh-pages
```

2. In `package.json`, ensure you have:
```json
{
  "homepage": "https://rohitdavas.github.io",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Deployment Process

1. Build and deploy the website:
```bash
npm run deploy
```

This command will:
- Build the React application
- Push the built files to the `gh-pages` branch
- Deploy the website to GitHub Pages

2. After deployment, your changes will be live at [rohitdavas.github.io](https://rohitdavas.github.io)

### Important Notes

- Always commit and push your changes to the main branch before deploying
- The deployment process may take a few minutes to reflect on the live site
- Make sure your repository settings have GitHub Pages enabled and pointing to the gh-pages branch

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## Project Structure

```
rohitdavas.github.io/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Page components
│   ├── data/          # Content data files
│   └── styles/        # Styled components and themes
├── public/            # Static files
└── package.json       # Project dependencies and scripts
```

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [GitHub Pages documentation](https://docs.github.com/en/pages)
