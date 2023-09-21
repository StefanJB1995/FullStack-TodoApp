CREATE TABLE todo(id long, username varchar(255), description varchar(255), target_date date, is_done bool);

insert into todo(id, username, description, target_date, is_done)
values(10001, 'stef', 'Learn JPA', '2023-09-23', false);

insert into todo(id, username, description, target_date, is_done)
values(10002, 'stef', 'Read Bible', '2023-09-23', false);

insert into todo(id, username, description, target_date, is_done)
values(10003, 'stef', 'Learn Programming', '2023-09-23', false);