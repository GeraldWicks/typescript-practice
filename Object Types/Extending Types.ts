interface User {
    id: number,
    firstName: string,
    lastName: string
}

interface FullUser extends User {
    email: string,
    phone: string
}

let newUser: User = { id: 0, firstName: "Gerald", lastName: "Wicks" };

let newFullUser: FullUser = { id: 1, firstName: "Gerald", lastName: "Wicks", email: "gerald@email.com", phone: "7070-7070" };

interface UserComplement {
    email: string,
    phone: string
}

interface CompleteUser extends User, UserComplement {};

let newCompleteUser: CompleteUser = {  id: 2, firstName: "Gerald", lastName: "Wicks", email: "gerald@email.com", phone: "7070-7070" };