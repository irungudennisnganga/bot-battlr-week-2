# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learning Goals
Implement a mini web app to practice components, props, state, events, and data fetching in react 
Instructions
For this project, you’ll be building out a React application that displays a

list of available bots, among other features. Try your best to find the right

places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given

instructions. While you will definitely have a significant amount of freedom in

how you implement the features, be sure to carefully read the directions for

setting up the application.


Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

## Project Setup
Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository.(NB: ENSURE IT IS PRIVATE).
Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
Please make sure you regularly commit to the repository.
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started:
json-server --watch db.json

Test your server by visiting this route in the browser:
http://localhost:8001/bots

## Project Guidelines
Your project should conform to the following set of guidelines:

Core Deliverables
As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.

- Add an individual bot to my army by clicking on it. The selected bot should

  render in the `YourBotArmy` component. The bot can be enlisted only **once**.

  The bot **does not** disappear from the `BotCollection`.

- Release a bot from my army by clicking on it. The bot disappears from the

  `YourBotArmy` component.

- Discharge a bot from their service forever, by clicking the red button marked

  "x", which would delete the bot both from the backend and from the

  `YourBotArmy` on the frontend.

Endpoints for Core Deliverables
#### GET /bots

Example Response:

[

  {

    "id": 101,

    "name": "wHz-93",

    "health": 94,

    "damage": 20,

    "armor": 63,

    "bot_class": "Support",

    "catchphrase": "1010010101001101100011000111101",

    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",

    "created_at": "2018-10-02T19:55:10.800Z",

    "updated_at": "2018-10-02T19:55:10.800Z"

  },

  {

    "id": 102,

    "name": "RyM-66",

    "health": 86,

    "damage": 36,

    "armor": 77,

    "bot_class": "Medic",

    "catchphrase": "0110011100000100011110100110011000011001",

    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",

    "created_at": "2018-10-02T19:55:10.827Z",

    "updated_at": "2018-10-02T19:55:10.827Z"

  }

]

```


##DELETE /bots/:id

Example Response:

{}

##  🚀 About Me
 * I'm a full stack developer
 * find me [here](https://github.com/irungudenninganga)


## License 
MIT License

Copyright (c) 2023 irungudennisnganga

>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

>The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  

