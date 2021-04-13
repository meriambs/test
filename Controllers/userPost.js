const post = require('../Models/Post');

//GET :  RETURN ALL USERS :

const findPost= async(req,res)=>{
    // const returnUser = await Person.find({name:req.parms.name});
    // return res.send(returnUser)
res.send('thisworks just testing');
}


// POST :  ADD A NEW USER TO THE DATABASE :

const creatPost = async (req, res) => {
    console.log('req.body',req.body)
const posts = new post (req.body);
const t = await posts.save()

return res.send(t)
}


//    //PUT : EDIT A USER BY ID 
// const findandUpdate = async ( req , res)=>{
// const updatedPerson = await Person.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
// return res.send(updatedPerson)
// }


//   //   DELETE : REMOVE A USER BY ID 
//   const deleteUser = async (req,res)=>{
//     const deltedPerson = await Person.findByIdAndRemove({_id:req.params.id});
//     return res.send(deltedPerson)
// }
module.exports = {
    findPost,
   creatPost,
    // findandUpdate,
    // deleteUser
}