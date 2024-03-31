# Sonono Frontend

the new website!

## Prerequisite software for local development

### NVM

Install nvm to be able to manage your diffrent node versions. If you have preinstalled node versions without nvm, please remove them before installing nvm

- For Mac:
  - Install using brew (<https://brew.sh/>)
    - $ `brew install nvm`
- For Linux: <https://github.com/nvm-sh/nvm#installing-and-updating>
- For Windows: <https://github.com/coreybutler/nvm-windows#installation--upgrades>

### Node

Required node version for this project is 20.10.0. You can install it using nvm:

- $ `nvm install 16.20.0` (install required version)
- $ `nvm use 16.20.0` (use the installed version as default in the current terminal window)
- $ `node -v` (display node version)
- $ `npm -v` (display npm version)

### Yarn

This project uses `yarn` as a package manager. You can install it using

- $ `npm install -g yarn`

## Run locally

- $ `yarn install` (install node dependencies)
- $ `yarn dev` (start in development mode)
- Server will running under <http://localhost:3000/>,  but if you acutely working on port 3000 at another framework you can see the port running at the terminal.
