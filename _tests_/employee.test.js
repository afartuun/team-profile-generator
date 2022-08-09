const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should construct the class', () => {
        const employee = {
            username: 'fartuun',
            id: '1',
            email:'fartame@gmail.com'
        };
        const inputs = new Employee('fartuun', '1', 'fartame@gmail.com')
        expect(employee) === inputs;
    });
});