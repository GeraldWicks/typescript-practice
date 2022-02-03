const user = {
    id: 123,
    admin: false,
    becomeAdmin: function() {
        this.admin = true;
    }
}
console.log(user);
user.becomeAdmin();
console.log(user);