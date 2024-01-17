const User = require('../models/user');
const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updateData = req.body; // Les données à mettre à jour seront envoyées dans le corps de la requête

  const update = {

    firstName:req.body.firstName,
    lastName:req.body.lastName,
    cin:req.body.cin,
    phoneNumber:req.body.phoneNumber

  };

  const filter = {
    _id : userId
  };

  await User.findOneAndUpdate(filter,update, {new : true}).then( doc =>{
    res.status(200).json(doc);
  }).catch(err =>{
    res.status(400).json(err);
  })
}


module.exports = {

    updateUser
};