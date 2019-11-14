INSERT INTO teachers (name, subject, email, phone, img, hash)
VALUES (${name}, ${subject}, ${email}, ${phone}, ${img},${hash} )
RETURNING teacher_id;