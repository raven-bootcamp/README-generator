const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const generateMarkdown = require("./scripts/generateMarkdown");
const markdownContent = require("./scripts/gatherContent");

// use util library to create the new file using promises, rather than callback methods
const writeFilePromise = util.promisify(fs.writeFile);

// using the inquirer library, ask the user the relevant questions
const gatherContents = () => {
    return inquirer.prompt(markdownContent);
}

// the logic for the application to run: welcome message, create new file using user input, exit message, catch any errors if they appear
const init = () => {
    console.log("Welcome to the README generator.\nPlease provide the following information:")
    gatherContents()
        .then((answers) => writeFilePromise("./output/README.md", generateMarkdown(answers)))
        .then(() => console.log("Thank you! :)"))
        .then(() => console.log("Your README file has been generated.  Please find it in the 'output' folder."))
        .catch((err) => console.error(err));
};

// run the logic of the application
init();