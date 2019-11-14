CREATE TABLE "students" (
	"student_id" serial NOT NULL,
    "name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
    'img' TEXT NOT NULL,
    "phone" TEXT NOT NULL,
	"hash" TEXT NOT NULL,
	CONSTRAINT "students_pk" PRIMARY KEY ("student_id")
) WITH (
  OIDS=FALSE
);


INSERT INTO students (name, email,img, phone, hash)
VALUES (${name}, ${email}, ${img}, ${phone}, ${hash} )
RETURNING student_id;


CREATE TABLE "teachers" (
	"teacher_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"img" TEXT NOT NULL,
	"hash" TEXT NOT NULL,
	CONSTRAINT "teacher_pk" PRIMARY KEY ("teacher_id")
) WITH (
  OIDS=FALSE
);
	
    




