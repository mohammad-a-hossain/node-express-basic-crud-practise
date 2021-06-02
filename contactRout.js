// PART-2

const router = require('express').Router()

const {
       getAllContacts,
       getContactById,
       createContacts,
       updateContacts,
       deleteContacts
} = require('./controller')

router.get('/', getAllContacts)
router.post('/', createContacts)
router.get('/:id', getContactById)
router.put('/:id', updateContacts)
router.delete('/:id',  deleteContacts)



module.exports =router






//PART-1

/* const router = require('express').Router()

const {
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require('./controller')

router.get('/', getAllContacts)
router.post('/', createContact)
router.get('/:id', getContactById)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router
 */
/* const router = require('express').Router()

const {getAllContacts,
       createContact,
      getSingleContacts,
      updateSingleConTact,
      deleteSingleContact
       } = require('./controller')
 
router.get('/', getAllContacts )
router.post('/', createContact)
router.get('/:id',getSingleContacts)
router.put('/:id',updateSingleConTact)
router.delete('/:id', deleteSingleContact)
 
module.exports = router
 */
