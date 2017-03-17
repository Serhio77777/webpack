document.write('We are here!');

let property = 'new prop',
    arr = [
        {
            prop: 1,
            name: 'RG-32',
            getName() {
                console.log(this.name);
            }
        },
        {
            prop: 2,
            name: 'RG-47',
            getName() {
                console.log(this.name);
            }
        },
        {
            prop: 3,
            name: 'RG-63',
            getName() {
                console.log(this.name);
            }
        }
    ];

class Dog {
    constructor(name) {
        this.name = name;
    }
}
