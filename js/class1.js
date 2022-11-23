// let user = {
//     username: "dongbin",
//     password: "3300"
// };

class User {
    username; // Java에서 private
    password;
    name;
    email;

    // setUsername(username) {
    //     this.#username = username;
    // }
    // getUsername() {
    //     return this.#username;
    // } // private일때만 getter, setter
}

class UserMain {
    main() {
        let user = new User();

        user.username = "dongbin";
        user.password = "3300";
        user.name = "동빈";
        user.email = "roornorn@gmail.com";

        console.log(user);
    }
}

window.onload = () => {
    let userMain = new UserMain();

    userMain.main();
}