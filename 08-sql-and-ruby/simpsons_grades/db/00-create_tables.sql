DROP TABLE courses;
DROP TABLE students;
DROP TABLE enrollments;

CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    title TEXT
);

CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE enrollments (
    id INTEGER PRIMARY KEY,
    course_id INTEGER,
    student_id INTEGER,
    grade_percent INTEGER
);

INSERT INTO courses (title)
VALUES ("Math"),
    ("Science"),
    ("English");

INSERT INTO students (name)
VALUES ("Bart"),
    ("Lisa"),
    ("Milhouse");

INSERT INTO enrollments (course_id, student_id, grade_percent)
VALUES (1, 1, 42),
    (2, 1, 17),
    (1, 2, 100),
    (3, 2, 102),
    (1,  3, 86);