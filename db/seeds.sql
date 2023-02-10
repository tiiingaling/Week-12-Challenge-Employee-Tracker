-- Seed data to populate database

-- Department data
INSERT INTO department (id, name)
VALUES
  (1,"Engineering"),
  (2,"Finance"),
  (3,"Legal"),
  (4,"Sales");

-- Roles data
INSERT INTO role (id,title,salary,department_id)
VALUES
  (1,"Engineer",60000,1),
  (2,"Engineer Lead",100000,1),
  (3,"Accountant",65000,2),
  (4,"Paralegal",65000,3),
  (5,"Lawyer",120000,3),
  (6,"Salesperson",25000,4),
  (7,"Sales Lead",35000,4);

-- Employee data
INSERT INTO employee (id,first_name,last_name,role_id, manager_id)
VALUES
  (1,"Rick","Sanchez",2,NULL),
  (2,"Morty","Smith",1,1),
  (3,"Hannah","Montana",7,NULL),
  (4,"Troy","Bolton",3,NULL),
  (5,"Gabriela","Montez",5,NULL),
  (6,"Ting","Wong",7,NULL),
  (7,"Clio","Neal",6,6),
  (8,"Justine","Wilder",4,5),
  (9,"Charity","Webb",6,6),
  (10,"Mari","Gallagher",1,1);