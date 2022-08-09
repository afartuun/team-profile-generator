const Engineer = require('../lib/Engineer');


describe("Engineer"), () => {
    It('should construct the class', () => {
        const engineer = {
            username: 'fartuun',
            id: '1',
            email: 'fartame@gmail.com',
            github: '100'
        };
        const inputs = new Engineer('fartuun','1','fartame@gmail.com','100'
        );
        exprect(engineer) === inputs;
    });
};