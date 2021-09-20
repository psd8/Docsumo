# Docsumo
Docsumo Login Page In React + Webpack


# Directory Structure

├── dist                    # Production Build
├── public                  # Contains public resource like favicon and index.html
├── src
|   ├── api                 # api related methods post,get etc defined over here and api end points route
|   ├── assets              # images and scss,css goes here
|   ├── components          # Different components files and scss are placed over here
|   ├── pages               # Pages files
|   ├── utils               # utility function and constant goes here
|   ├── App.js              # Main entry point of React 
├── package.json            # Dependencies 
├── server.js               # api server configuration file, for login api endpoint
├── server_build.js         # file to run optiomise build generated using the npm run build
├── webpack.config.js.      # webpack configuration for different loader like scss, file, babel etc and process env variables
├── index.js                # main entry point of the project
└── README.md               # readme file


# Stepswise Command to run project
npm install                # first install dependencies
node server,js             # run api server to make login endpoint up and running

npm run dev                # Run Project in Dev mode
npm run build && npm start # Create optimise build and run the project from that build
