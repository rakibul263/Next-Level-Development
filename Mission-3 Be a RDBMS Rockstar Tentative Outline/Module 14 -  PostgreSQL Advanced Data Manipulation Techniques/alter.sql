CREATE TABLE
    employe (id serial, NAME VARCHAR(20), age INT);


-- rename table
ALTER TABLE employe
RENAME TO employee;


-- add a column
ALTER TABLE employee
ADD COLUMN email VARCHAR(50)
-- drop column
ALTER TABLE employee
DROP COLUMN email;


-- rename column name
ALTER TABLE employee
RENAME COLUMN NAME TO user_name;


-- modifying constrain 
ALTER TABLE employee
ALTER COLUMN user_name
TYPE VARCHAR(100);


-- add constrain
ALTER TABLE employee
ALTER COLUMN email
SET NOT NULL;