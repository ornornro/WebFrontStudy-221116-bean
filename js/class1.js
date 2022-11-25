// let user = {
//     username: "dongbin",
//     password: "3300"
// };

class User {
    username; // Java에서 private
    password;
    name;
    email;

    constructor(username, password, name, email) { // 생성자
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    printName() {
        console.log(this.name + "님의 정보");
    }

}

class UserMain {

    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new UserMain();
        }
        return this.#instance;
    } // 싱글톤

    main() {
        let user = new User("dongbin", "3300", "이동빈", "roornorn@gmail.com");

        // user.username = "dongbin";
        // user.password = "3300";
        // user.name = "동빈";
        // user.email = "roornorn@gmail.com";

        console.log(user);

        localStorage.username = user.username;
        console.log("username: " + localStorage.username);

        user.printName();
    }
}

window.onload = () => {
    let userMain = UserMain.getInstance();

    userMain.main();
}