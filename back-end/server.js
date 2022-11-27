const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/student', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  university: String,
});

studentSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
studentSchema.set('toJSON', {
  virtuals: true
});

const Student = mongoose.model('Student', studentSchema);

app.post('/student-database', async (req, res) => {
    const student = new Student({
    fist_name: req.body.first_name,
    last_name: req.body.last_name,
    university: req.body.university
  });
  console.log("In post")
  try {
    await student.save();
    res.send({student:student});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));