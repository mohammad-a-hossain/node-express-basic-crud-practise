
const users =require('./Users')


exports.getAllUsers=(req,res)=>{
  res.json(users.getAllUsers())
}

exports.createUser = (req, res) => {
    let { name,email, phone, dob } = req.body
    let user = users.createUser({
        name,
        email,
        phone,
        dob
    })

    res.json(user)
}


exports.getUsersById =(req,res)=>{
    let {id} =req.params
     id =parseInt(id)
       let user =users.getUsersById(id)
       res.json(user)
}

exports.updateUserById =(req,res)=>{
    let {id }= req.params 
    id = parseInt(id)
   let {name, email,phone,dob} =req.body 
   let user =users.updateUserById(id,{
       name,
       email,
       phone,
       dob
   })
   res.json(user)

}
exports.deleteUser =(req,res)=>{
    let {id} = req.params 
    id =parseInt(id)
    let user = users.deleteUser(id)
    res.json(user)
}














/* 
const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body
    let contact = contacts.createContact({
        name,
        phone,
        email
    })

    res.json(contact)
}

exports.getContactById = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.getContactsById(id)
    res.json(contact)
}

exports.updateContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let { name, email, phone } = req.body
    let contact = contacts.updateContactById(id, {
        name, 
        email,
        phone
    })
    res.json(contact)
}

exports.deleteContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)
    res.json(contact)
} */

/* 

const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body
    let contact = contacts.createContact({
        name,
        phone,
        email
    })

    res.json(contact)
}

exports.getSingleContacts = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.getSingleContacts(id)
    res.json(contact)
}

exports.updateSingleConTact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let { name, email, phone } = req.body
    let contact = contacts.updateSingleConTact(id, {
        name, 
        email,
        phone
    })
    res.json(contact)
}

exports.deleteSingleContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.deleteSingleContact(id)
    res.json(contact)
} */
/* 
const contacts = require('./Contacts')
exports.getAllContacts= (req,res)=>{
    res.json(contacts.getAllContacts() )
}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body
    let contact = contacts.createContact({
        name,
        phone,
        email
    })

    res.json(contact)
}

exports.getSingleContacts = (req, res)=>{
    let id  = req.params.id
    id = parseInt(id)
    let contact = contacts.createContact(id)
    res.json(contact)
}

exports.updateSingleConTact = (req, res)=>{
    let { id } = req.params
    id =parseInt(id)
    let { name, phone, email} = req.body

    let contact = contacts.updateSingleConTact(id, {
        name, 
        phone, 
        email
    })
    res.json(contact)
}


exports.deleteSingleContact = (req, res)=>{
    let { id }= req.params
    id = parseInt(id)
    let contact = contacts.deleteSingleContact(id)
    res.json(contact)
}
 */
