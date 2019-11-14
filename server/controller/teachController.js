const bcrypt = require("bcryptjs");

module.exports = {
  async registerTeacher(req, res) {
    const db = req.app.get("db");
    const { name, subject, email, phone, img, password } = req.body;
    const teacher = await db.find_teacher_email(email);
    if (teacher[0])
      return res.status(200).send({ message: "Email already in use" });
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newTeacher = await db
      .add_teacher({ name, subject, email, phone, img, hash })
      .catch(err => {
        return res.sendStatus(503);
      });
    req.session.teacher = {
      teacherId: newTeacher[0].teacher_id,
      name,
      subject,
      email,
      phone,
      img,
      loggedIn: true
    };
    res
      .status(201)
      .send({
        message: "You are now registered",
        teacher: req.session.teacher
      });
  },

  async loginTeacher(req, res) {
    const db = req.app.get('db')
    const { email, password } = req.body
    // console.log(email, password)
    // check if user exists (and the hash)
    const user = await db.find_teacher_email(email)
    // if user doesn't exist, send appropriate response
    if (!user[0]) return res.status(200).send({ message: 'Email not found' })
    // hash password and compare
    const result = bcrypt.compareSync(password, user[0].hash)
    // if hashes don't match, send appropriate response
    if (!result) return res.status(200).send({ message: 'Incorrect password' })
    // if they do match, add user to sessions
    const {name, teacher_id} = user[0]
    req.session.teacher = { teacherId: teacher_id, email, name,phone,img }
    // send session.user back to front end
    res
        .status(200)
        .send({ message: 'Logged in', teacher: req.session.teacher, loggedIn: true })
},









};
