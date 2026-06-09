INSERT INTO students (
    first_name,
    last_name,
    age,
    grade,
    course,
    email,
    dob,
    blood_group,
    country
)
VALUES (
    'Arafat',
    'Hossain',
    21,
    'A+',
    'Computer Science',
    NULL,
    '2004-02-10',
    'B+',
    'Bangladesh'
);

select * from students;

select * from students where email is null;

-- limit and offset
select * from students limit 5 offset 2

-- update 
update students
set email = 'default@gmail.com'
where email is null;

-- change grade
update students
set grade = 'C'
where student_id in (1,2);

-- change first_name and age for the student_id = 1
update students
set first_name = 'John Done', age = 23
where student_id = 1
