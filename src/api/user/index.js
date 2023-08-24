const userSchema = require("../../models/user");

exports.getData = (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getAData = (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.postData = (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.updateData = (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.deleteData = (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    // .findByIdAndRemove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
