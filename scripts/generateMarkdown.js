const licenseLinks = require("./licenseDetails");

function generateMarkdown(data) {

    // set the value for the license badge to display, based on the user's selection
    data.badge = licenseLinks[data.license];

    // generate Markdown code
    return `# ${data.title}
${data.badge}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license-for-use)
- [Contribution Policy](#contribution-policy)
- [Tests](#tests)
- [Contact](#contact)

## Installation
Simply run the following commands:

\`
${data.install}
\`
## Usage
This section will outline the instructions of how to use the project.

${data.usage}
## License For Use
The project falls under the current license and all its associated rules and agreements:

${data.badge}
## Contribution Policy
${data.contribution}

Otherwise, please see [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) for general guidlines for code of conduct.
## Tests
For testing, please run the following command from the base directory:

\`
${data.tests}
\`
## Contact
If you have any questions or comments about this project or repository, please contact ${data.name} at [${data.email}](mailto:${data.email}).  
Alternatively, see this and other repositories in Github at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;