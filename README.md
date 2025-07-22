## About the Project

This repository contains the source code for my personal website. It is a monorepo that organizes multiple components and services required for the website.

## Project Structure

```
/apps
    /frontend   - The main frontend application built with [framework/tool].
    /backend    - The backend service handling API requests.

/packages
    /shared     - Shared utilities and components used across apps.
    /config     - Centralized configuration files for the monorepo.
```

## How to Run the Project

1. Install dependencies for all workspaces
From the root of your project:

npm install

2. Start the backend (API)
Open a terminal and run:

cd apps/api
npm install
npm run dev

(or use the correct script to start your Express server, e.g. npm start or node src/index.js)

3. Start the frontend (web)
Open another terminal and run:

cd apps/web
npm install
npm run dev

This will start your Vite/React app.

4. Access your site
Frontend: http://localhost:5173 (or the port Vite shows)
API: http://localhost:3001 (or your Express port)
Note:

For static-only sites, you only need to run the frontend.
For dynamic/API features, both frontend and backend must be running.
Let me know if you need help with deployment or production setup!

## Contributing

Feel free to open issues or submit pull requests to improve the project.
my website
