// Object Based

const User = {
    _email: 'b@bsb.com',
    // email: 'b@bsb.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
        // return this.email.toUpperCase();

    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User); // factory function - Object.create(ref)
console.log(tea.email);