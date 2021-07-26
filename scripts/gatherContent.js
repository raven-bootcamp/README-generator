// the questions for gathering information when creating the README file
const markdownContent = [
    {
        type: "input",
        name: "title",
        message: "Project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Project description:",
    },
    {
        type: "input",
        name: "install",
        message: "How do you install the project?",
        default: "npm install",
    },
    {
        type: "input",
        name: "usage",
        message: "Once installed, what actions should be taken to use the project?",
    },
    {
        type: "list",
        name: "license",
        message: "Under which license is your project covered?",
        choices: ["MIT", "Apache 2.0", "GNU v3"],
    },
    {
        type: "input",
        name: "contribution",
        message: "What is the project's contribution policy?",
    },
    {
        type: "input",
        name: "tests",
        message: "How do you run the project's test suite?",
        default: "npm run test",
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function(email)
        {
            // check for valid email format
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github account name?",
    },
]

module.exports = markdownContent;