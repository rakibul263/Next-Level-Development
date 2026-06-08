create table students (
  student_id serial primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  age int,
  grade char(2),
  course varchar(50),
  email varchar(100) unique,
  dob date,
  blood_group varchar(10),
  country varchar(50)
)

-- insert data
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
) VALUES
(
    'John',
    'Doe',
    20,
    'A+',
    'Computer Science',
    'john.doe@example.com',
    '2005-03-15',
    'O+',
    'USA'
),
(
    'Emma',
    'Watson',
    22,
    'A',
    'Software Engineering',
    'emma.watson@example.com',
    '2003-07-22',
    'A+',
    'UK'
),
(
    'Rakib',
    'Hasan',
    21,
    'B+',
    'Information Technology',
    'rakib.hasan@example.com',
    '2004-01-10',
    'B+',
    'Bangladesh'
),
(
    'Sophia',
    'Brown',
    19,
    'A-',
    'Data Science',
    'sophia.brown@example.com',
    '2006-05-30',
    'AB+',
    'Canada'
),
(
    'Michael',
    'Johnson',
    23,
    'B',
    'Cyber Security',
    'michael.johnson@example.com',
    '2002-09-12',
    'O-',
    'Australia'
);

-- show all data
select * from students;

-- column alice
select first_name as "First Name" from students;

-- sorting
select first_name, blood_group, country, age from students order by age ASC ;

-- distinct 
select country from students;

-- select student whose first name starts with 'S'
select * from students  where first_name like 'S%';

-- select student whose country is not bangladesh
select * from students
  where not country = 'Bangladesh'


-- select student from usa
select * from students where country = 'USA';

-- or operator
select * from students where country = 'USA' or country = 'Bangladesh';

-- comparison operator
select * from students where age >= 20;

-- select student whose age between 20 to 23 
select * from students where age between 20 and 23;

-- in operator
select * from students where country in ('Bangladesh', 'USA');


--scaler function
select upper(first_name) as "First Name", first_name, age, country from students;

-- Aggregate Functions
select avg(age) from students;

select max(age) from students;

select count(*) from students;
