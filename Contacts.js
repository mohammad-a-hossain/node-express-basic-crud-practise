

/* class Contacts {
    constructor() {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    getContactsById(id) {
        return this.contacts.find(contact => contact.id === id)
    }

    createContact(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }

    updateContactById(id, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.id === id)

        this.contacts[index].name = updatedContact.name || this.contacts[index].name
        this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone
        this.contacts[index].email = updatedContact.email || this.contacts[index].email

        return this.contacts[index]
    }

    deleteContactById(id) {
        let index = this.contacts.findIndex(contact => contact.id === id)
        let deletedObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact => contact.id !== id)
        return deletedObj
    }
}

module.exports = new Contacts()
 */


/* class Contacts {
    constructor() {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    getContactsById(id) {
        return this.contacts.find(contact => contact.id === id)
    }

    createContact(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }

    updateContactById(id, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.id === id)

        this.contacts[index].name = updatedContact.name || this.contacts[index].name
        this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone
        this.contacts[index].email = updatedContact.email || this.contacts[index].email

        return this.contacts[index]
    }

    deleteContactById(id) {
        let index = this.contacts.findIndex(contact => contact.id === id)
        let deletedObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact => contact.id !== id)
        return deletedObj
    }
} */
/* const contact = new Contacts() */
//module.exports = new Contacts()



/* class Contacts {
    constructor() {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }
    getSingleContacts(id){
        return this.contacts.find(contact => contact.id === id)
        
 }


 
 createContact(contact){
    contact.id = this.contacts.length + 1
    this.contacts.push(contact)
    return contact
}


updateSingleConTact(id,updateData){
    let index = this.contacts.findIndex(contact => contact.id === id)
    this.contacts[index].name = updateData.name || this.contacts[index].name
    this.contacts[index].phone = updateData.phone || this.contacts[index].phone
    this.contacts[index].email = updateData.email || this.contacts[index].email

    return this.contacts[index]

}

deleteSingleContact(id){
    let index = this.contacts.findIndex(contact => contact.id ===id)
    let deleteItem = this.contacts[index]
    this.contacts = this.contacts.filter(contact => contact.id !== id)
    return deleteItem
 }

   
}
const contact = new Contacts()
module.exports = contact
 */