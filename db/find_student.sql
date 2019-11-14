SELECT student_id, name, email,img, phone, hash from students
WHERE email = $1;