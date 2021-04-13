var express = require('express');
var router = express.Router();
const { findPost, creatPost} = require('../Controllers/userPost');

/* GET users listing. */
router.post('/', creatPost);

/* GET users listing. */
 router.get('/', findPost);
// router.get('/:id', findUsers);

// // update 

// router.put('/:id',findandUpdate);

// // //delete

//  router.delete('/:id',deleteUser);

module.exports = router;
