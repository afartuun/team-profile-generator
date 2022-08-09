const  Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should construct the class', () => {
        const manager = {
            username: 'fartuun',
            id:'1',
            email:'fartame@gmail.com',
            officeNumber:'3'
        };
        const inputs = new Manager('fartuun', '1', 'fartame@gmail.com');
        expect(manager) === inputs;
    });
});