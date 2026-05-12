-- Write your PostgreSQL query statement below
select e.name as Employee from Employee e join (select * from Employee) m on e.managerId = m.id where e.salary > m.salary;