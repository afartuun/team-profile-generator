const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('construct the class', () => {
        const intern = {
            username:'fartuun',
            id: '1',
            email:'fartame@gmail.com',
            school:'Metro State'
        };
        const inputs = new Intern('fartuun', '1', 'fartame@gmail.com','Metro State');
        expect(intern) === inputs; 
    });
});
