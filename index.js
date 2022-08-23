//imports
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
let array = []



 mainQuestion = [
    {
        type: 'list',
        name: 'role',
        message: 'What role do you want?',
        choices: ['Intern', 'Engineer', 'Manager']
    }
    ];

    

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    
    },
    {
        type:'input',
        name:'id',
        message:'What is your id number?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    },
    {
        type:'input',
        name:'school',
        message:'What school do you go to?'
    }

];

const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        
        },
        {
            type:'input',
            name:'id',
            message:'What is your id number?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'github',
            message:'What is your github?'
        }
       
    ];

managerQuestions = [

        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        
        },
        {
            type:'input',
            name:'id',
            message:'What is your id number?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'officeNumber',
            message:'What is your officeNumber?'
        }
    ];


function generateHTML(array) {
    fs.writeFileSync(
        "./dist/index.html",
        `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
          />
          <title>My Team</title>
        </head>
        <body class="container">
          <div class="row container">
            <h1 class="col-md-auto">My Team</h1>
          </div>
          <div class="row">
      `,
      err => (err ? console.error(err) : console.log("begin html"))
  );
  let ph ='';
  for(i = 0; i< employees.length; i++) {
      if(employees[i].role ==='Manager') {
          ph = 'Office Number:' + employee[i].officeNumber;
      }else if (employees[i].role === "Engineer") {
          ph = 
          'GitHub: <a href="https://github.com/' +
        employees[i].github +
        '"target = "_blank">' +
        employees[i].github +
        "</a>";
      }else if (employees[i].role === 'Intern') {
          ph = 'School' + employees[i].school;
      }else {
          continue;
      }
  }
}
fs.appendFileSync(
    "./dist/index.html",
    `<div class="col-md-6 wrap card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">
          ${employees[i].role}
        </h5>
        <p class="card-text">
          ${employees[i].username}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Employee ID: ${employees[i].id}
        </li>
        <li class="list-group-item">
          ${ph}
        </li>
      </ul>
      <div class="card-body">
        <a href="mailto:${employees[i].email}" class="card-link">
          ${employees[i].email}
        </a>
      </div>
    </div>`,
    err => (err ? console.error(err) : console.log(i))
  );


fs.appendFileSync(
  "./dist/index.html",
  ` </div>
  </body>
</html>
`,
  err => (err ? console.error(err) : console.log("end html"))
);

function options() {
    inquirer.prompt(option).then(option => {
      const { choice } = option;
      if (choice == "New Engineer") {
        inquirer
          .prompt(engineerQuestions)
          .then(data => {
            const { username, id, email, github } = data;
            let engineer = new Engineer(username, id, email, github);
            const engineerObject = {
              role: engineer.getRole(),
              username: engineer.getUsername(),
              id: engineer.getId(),
              email: engineer.getEmail(),
              github: engineer.getGithub()
            };
            employees.push(engineerObject);
          })
          .then(function() {
            options();
          });
      } else if (choice == "New Intern") {
        inquirer
          .prompt(internQuestions)
          .then(data => {
            const { username, id, email, school } = data;
            let intern = new Intern(username, id, email, school);
            const internObject = {
              role: intern.getRole(),
              username: intern.getUsername(),
              id: intern.getId(),
              email: intern.getEmail(),
              school: intern.getSchool()
            };
            employees.push(internObject);
          })
          .then(function() {
            options();
          });
      } else {
        generateHTML(employees);
      }
    });
  }
  
  function init() {
    inquirer
      .prompt(managerQuestions)
      .then(data => {
        const { username, id, email, officeNumber } = data;
        const manager = new Manager(username, id, email, officeNumber);
        const managerObject = {
          role: manager.getRole(),
          username: manager.getUsername(),
          id: manager.getId(),
          email: manager.getEmail(),
          officeNumber: manager.getOfficeNumber()
        };
        employees.push(managerObject);
      })
      .then(function() {
        options();
      });
  }
  init();



