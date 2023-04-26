const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generate = require("./util/generateHtml");

const team = [];
const generateManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is the manager's employee id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is the manager's email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
      },
    ])
    .then((ans) => {
      const manager = new Manager(ans.name, ans.id, ans.email, ans.office);
      team.push(manager);

      selectTeamMember();
    });
};
const generateIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is the Intern's employee id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is the Intern's email?",
      },

      {
        type: "input",
        name: "school",
        message: "what is the Intern's school?",
      },
    ])
    .then((ans) => {
      const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
      team.push(intern);

      selectTeamMember();
    });
};
const generateEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is the Engineer's employee id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is the Engineer's email?",
      },

      {
        type: "input",
        name: "github",
        message: "what is the Engineer's github username?",
      },
    ])
    .then((ans) => {
      const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
      team.push(engineer);

      selectTeamMember();
    });
};
const selectTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "who would you like to add to your team?",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((ans) => {
      if (ans.option === "Engineer") {
        generateEngineer();
      } else if (ans.option === "Intern") {
        generateIntern();
      } else {
        fs.writeFile("./dist/index.html", generate(team), (err) => {
          if (err) {
            throw err;
          } else {
            console.log("you have succesfully completed the task!");
          }
        });

        console.log(team);
        console.log("Goodbye!!!");
      }
    });
};
function init() {
  generateManager();
}
init();
