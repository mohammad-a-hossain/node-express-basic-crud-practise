// PART -2
// importing contacts from contact module
const Contact = require('./Contacts')

exports.getAllContacts =(req,res)=>{
  Contact.find()
  .then(data =>{
      res.json(data)
  })
  .catch(err =>{
      res.json({
          message:'error occurred in get dat'
      })
  })

}
exports.getContactById=(req,res)=>{
    let {id} = req.params
    Contact.findById(id)
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json({
            message:'error in update file'
        })
    })
}
exports.createContacts=(req,res)=>{
const {name, email,phone} = req.body
const contact = new Contact({
    name, email,phone
})
    contact.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        //console.log(err)
        res.json({
            message:'error in create contact'
        })
    })
}
exports.updateContacts =(req,res)=>{
    const {name,email,phone} =req.body
    let {id} =req.params
    Contact.findOneAndUpdate({
        _id:id,
    },{
        $set:{
            name,
             email,
             phone
        }
    },
        {new:true})
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json({
            message:'error in updating'
        })
    })
    
}
exports.deleteContacts =(req,res)=>{

    let {id} = req.params
    Contact.findOneAndDelete(id)
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json({
            message:'error in deleting'
        })
    })
}






















// part -1

// const users =require('./Users')


// exports.getAllUsers=(req,res)=>{
//   res.json(users.getAllUsers())
// }

// exports.createUser = (req, res) => {
//     let { name,email, phone, dob } = req.body
//     let user = users.createUser({
//         name,
//         email,
//         phone,
//         dob
//     })

//     res.json(user)
// }


// exports.getUsersById =(req,res)=>{
//     let {id} =req.params
//      id =parseInt(id)
//        let user =users.getUsersById(id)
//        res.json(user)
// }

// exports.updateUserById =(req,res)=>{
//     let {id }= req.params 
//     id = parseInt(id)
//    let {name, email,phone,dob} =req.body 
//    let user =users.updateUserById(id,{
//        name,
//        email,
//        phone,
//        dob
//    })
//    res.json(user)

// }
// exports.deleteUser =(req,res)=>{
//     let {id} = req.params 
//     id =parseInt(id)
//     let user = users.deleteUser(id)
//     res.json(user)
// }














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
