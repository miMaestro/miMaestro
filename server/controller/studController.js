const bcrypt = require("bcryptjs");

module.exports = {
  async registerStudent(req, res) {
    console.log(req.body)
    const db = req.app.get("db");
    const { name, email, phone, img, password } = req.body;
    const student = await db.find_email(email);
    if (student[0])
      return res.status(200).send({ message: "Email already in use" });
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newStudent = await db
      .add_student({ name, email, phone, img, hash })
      .catch(err => {
        return res.sendStatus(503);
      });
    req.session.student = {
      studentId: newStudent[0].student_id,
      name,
      email,
      phone,
      img,
      loggedIn: true
    };
    res
      .status(201)
      .send({
        message: "You are now registered",
        student: req.session.student
      });
  },
  async loginStudent(req, res) {
    const db = req.app.get('db')
    const { email, password } = req.body
    // console.log(email, password)
    // check if user exists (and the hash)
    const user = await db.find_student(email)
    // if user doesn't exist, send appropriate response
    if (!user[0]) return res.status(200).send({ message: 'Email not found' })
    // hash password and compare
    const result = bcrypt.compareSync(password, user[0].hash)
    // if hashes don't match, send appropriate response
    if (!result) return res.status(200).send({ message: 'Incorrect password' })
    // if they do match, add user to sessions
    const {name, student_id} = user[0]
    req.session.student = { studentId: student_id, email, name,phone,img }
    // send session.user back to front end
    res
        .status(200)
        .send({ message: 'Logged in', student: req.session.student, loggedIn: true })
},
};
