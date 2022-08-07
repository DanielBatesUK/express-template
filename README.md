# express-template

Simple node.js express template

## Installation

### Create repo from template

Goto <https://github.com/DanielBatesUK/express-template/generate> and create new repo from the template

### Clone your repo

Clone the new repo to your system. Replacing `YOUR-USERNAME` & `YOUR-REPO-NAME` where appropriate.

```Shell
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME
```

### Install dependencies

Once cloned, goto the project's root directory and install required dependencies from npm.

```Shell
npm install
```

### Configure the .env file

Create an new .env file with the following.

```Shell
cat > .env
```

Then enter the following variables:

```Shell
PORT=3000
ROUTE_INDEX="/"
VIEW_INDEX="index"
```

 With the above press <kbd>Ctrl</kbd> + <kbd>D</kbd> to save.

## Run

After you making the .env file you can then start the app with either:

```Shell
node server.js
```

or

```Shell
npm start
```
