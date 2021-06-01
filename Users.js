class Users {
    constructor(){
        this.users =[]
    }

createUser(user){
   user.id =this.users.length +1
   this.users.push(user)
   return user
}


getAllUsers(){
   return this.users
}

getUsersById(id){
    return this.users.find(user => user.id === id)
}
updateUserById(id,userData){
    let index =this.users.findIndex(user => user.id === id)

    this.users[index].name  = userData.name || this.users[index].name
    this.users[index].email =userData.email || this.users[index].email
    this.users[index].phone =userData.phone || this.users[index].phone
    this.users[index].dob   =userData.dob   || this.users[index].dob

    return this.users[index]
}

deleteUser(id){
    let index =this.users.findIndex(user => user.id === id)
    const deletedIndex = this.users[index]
    this.users = this.users.filter(user => user.id !==id)
    return deletedIndex
}
}

const users = new Users()
module.exports =users