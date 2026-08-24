# Emmanuel Matewere Portfolio

A responsive personal portfolio website for Emmanuel Matewere, a full-stack developer and digital systems specialist based in Malawi.

The site presents professional experience, technical expertise, selected projects, and contact information in a modern single-page layout.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Animated hero section with rotating professional roles
- Expertise cards covering development, digital banking, IT support, databases, and automation
- Professional history timeline
- Project showcase with browser-style visual previews and live website links
- Contact form and social links
- Mobile navigation with smooth scrolling
- Dark portfolio visual style with SCSS design tokens and responsive breakpoints

## Built With

- React 18
- TypeScript
- Create React App
- Sass / SCSS
- Material UI Icons
- Font Awesome
- Framer Motion
- React Vertical Timeline Component

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/riley071/EmmanuelMatewere07.git
cd EmmanuelMatewere07
npm install
```

### Run Locally

Start the development server:

```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command          | Description                                        |
| ---------------- | -------------------------------------------------- |
| `npm start`      | Starts the development server                      |
| `npm run build`  | Creates an optimized production build              |
| `npm test`       | Runs the test suite in watch mode                  |
| `npm run deploy` | Publishes the `build` directory using GitHub Pages |

## Project Structure

```text
public/                 Static files and deployment configuration
src/
  assets/images/        Image assets
  assets/styles/        Component SCSS files
  components/           Portfolio page sections
  App.tsx               Main page composition
  index.scss            Global styles and design tokens
  index.tsx             Application entry point
```

## Deployment

The project can be deployed through Vercel by importing the GitHub repository. Vercel detects the Create React App setup and runs the production build automatically.

For GitHub Pages deployment:

```bash
npm run build
npm run deploy
```

Push changes to the `main` branch after committing them so connected deployment services can build the latest version:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Contact

- GitHub: [github.com/riley071](https://github.com/riley071)
- LinkedIn: [Emmanuel Matewere](https://www.linkedin.com/in/emmanuel-matewere-b5a39218/)
- Email: emmanuelmatewere@gmail.com
- Location: Malawi

## License

This project is available under the terms of the repository's [LICENSE](LICENSE) file.
