//imports
const inquirer = require('inquirer');
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

    function init() {
        inquirer.createPromptModule(mainQuestion).then(data => {
            fs.writeFile('./dist/index.html', data, (error) => {
                error ? console.log(error) : console.log('HTML file is generated!')
            });
        });
        init();
    }
// question();
// if(question.choices === 'Engineer') {
//     prompt(engineerQuestions)
// } else {
//     console.log('bye')
// };

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
// ).then((answer) => {
//    let intern = new Intern(
//        answer.name, answer.id, answer.email, answer.school
//    )
// array.push(intern);
// question();
// });
// };
// question();
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
//     ).then((engineerQuestions) => {
//         const engineer = new Engineer(
//             engineerQuestions.name, engineerQuestions.id, engineerQuestions.email, engineerQuestions.github
//         )
//         array.push(engineer);  
//     });
// };
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

        // inquirer.prompt(mainQuestion).then(data) => {
        //     fs.writeFile('./dist/index.html', data, (error) => {
        //         error ? console.log(error) : console.log('HTML file is generated!!')
        //     });
    
    
    // };
    // ).then((managerQuestions) => {
    //     const manager = new Manager(
    //         managerQuestions.name, managerQuestions.id, managerQuestions.email, managerQuestions.officeNumber
    //     )
    //     array.push(manager);
    //     console.log('hey there');
    // });

// };

// question();

// function generateHTML(array) {
//     fs.writeFileSync(
//         './dist/index.html',
//         `<html lang="en">

//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <link rel="stylesheet" href="./style.css">
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
//                 integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
//             <title>My Team</title>
//         </head>
        
//         <body class="d-flex justfity-content-center container">
//             <div class="row container-fluid">
//                 <h1 class="col-md-auto" id="title">My Team</h1>
//             </div>
//     `,
//     err => (err ? console.error(err) : console.log('begin html'))
//     );
//     let hi = "";
//   for (i = 0; i < array.length; i++) {
//     if (array[i].role === "Manager") {
//       hi = "Office Number: " + array[i].officeNumber;
//     } else if (array[i].role === "Engineer") {
//       hi =
//         'GitHub: <a href="https://github.com/' +
//         array[i].github +
//         '"select = "_blank">' +
//         array[i].github +
//         "</a>";
//     }else if (array[i].role === 'Intern') {
//         hi = "School:" + array[i].school;
//     }else {
//         continue;
//     }
//     }

// };



