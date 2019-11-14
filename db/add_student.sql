INSERT INTO students (name, email, img, phone, hash)
VALUES (${name}, ${email}, ${img}, ${phone}, ${hash} )
RETURNING student_id;
