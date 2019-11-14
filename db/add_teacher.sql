INSERT INTO teachers (name, email,phone, img, hash)
VALUES (${name},${email}, ${phone}, ${img},${hash} )
RETURNING teacher_id;