# School Genuine Web App Documentation

## Introduction
I developed School Genuine, a web application, at Zap Technology. I built it using React, Vite, and Tailwind CSS. The application serves as a digital platform for school management.

## Getting Started

### Prerequisites
- Node.js v14.0.0 or above
- npm v6.0.0 or yarn v1.22.0

### Installation
1. Clone the repo: `git clone https://github.com/yourusername/school-genuine.git`
2. Install NPM packages: `npm install` or `yarn install`

## Usage
To start the development server, run `npm run dev` or `yarn dev`.

## Application Structure

### React Components
- `App`: This is the root component of the application.
- `Hero`: This component folder displays all the various hero components 
- `Navbar`: This component folder handles all the navbar for both smaller and larger screens using both the extended navbar and the hamburger menu.

### Vite Configuration
The Vite configuration is located in the `vite.config.js` file. I've configured Vite to use the React preset and enabled absolute imports.

### Tailwind CSS
I'm using Tailwind CSS for styling my components. I've customized my color palette in the `tailwind.config.js` file.

## Testing
Run `npm test` or `yarn test` to execute the test suite.

## Deployment
The application is deployed on Vercel. To deploy your own version, connect your repository to Vercel and it will be deployed automatically on each push.

## Contributing
Contributions are welcome! Please read my contributing guidelines to get started.

## License
This project is licensed under the MIT License.

## Contact Information
For any queries, please contact me at amohntim123@gmail.com.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
