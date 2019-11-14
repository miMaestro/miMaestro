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
	"subject" varchar(255) NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"img" TEXT NOT NULL,
	"hash" TEXT NOT NULL,
	CONSTRAINT "teacher_pk" PRIMARY KEY ("teacher_id")
) WITH (
  OIDS=FALSE
);

-- Dummy Data

INSERT INTO teachers (name, subject, email, phone, img, hash)
VALUES ('Mr. Feeny', 'History', 'feeny@gmail.com', '555-555-5555', 'https://tvguide1.cbsistatic.com/i/2017/05/31/348eb052-d452-44e2-890d-c4d6c1edbda0/b474b31d7fdfbb34ac7a34ff2ab7bdcf/170531-william-daniels-hp-lg.jpg', 'hash1'),
       ('Mr. Miyagi', 'Karate', 'waxon@gmail.com', '123-456-7890', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Pat-Morita_%28Karate_Kid%29.jpg/250px-Pat-Morita_%28Karate_Kid%29.jpg', 'hash2'),
       ('Detective John Kimble', 'Kindergarten', 'get2thechopper@gmail.com', '098-765-4321', 'https://i.pinimg.com/originals/4c/19/07/4c190787ab5119a2e8f58c1aced093c9.jpg', 'hash3'),
       ('Miss Krabappel', '4th Grade', 'krab@simpsons.com', '135-792-4680', 'https://i.ytimg.com/vi/6MDNF0_wJO8/hqdefault.jpg', 'hash4');
	
    




