class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }


    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        // return this.password.toUpperCase();
        // return this._password.toUpperCase();
        return `${this._password}bhabani`;

    }

    set password(value){
        // this.password = value.toUpperCase();
        this._password = value.toUpperCase();

    }
}

const bhabani = new User("b@bhabani.ai", "abc");
console.log(bhabani.password);
console.log(bhabani.email);
