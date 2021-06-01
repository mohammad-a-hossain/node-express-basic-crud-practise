
const router =require('express').Router()

const {
    getAllUsers,
    createUser,
    getUsersById,
    updateUserById,
    deleteUser
} = require('./controller')

router.get('/',getAllUsers)
router.post('/',createUser)
router.get('/:id',getUsersById)
router.put('/:id',updateUserById)
router.delete('/:id',deleteUser)

module.exports =router



























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
