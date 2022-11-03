create table customer
(
    id      serial primary key,
    name    varchar(255),
    surname varchar(255),
    phone   varchar(30)
);

create table auto
(
    id    serial primary key,
    brand varchar(255),
    model varchar(255)

);

create table deal
(
    id          serial primary key,
    customer_id integer references customer (id),
    auto_id     integer references auto (id),
    amount      integer,
    price       integer,
    date_deal   date
);

insert into customer (surname, name, phone)
values ('Иванов', 'Сергей', '+79107891122'),
 ('Коробкин', 'Олег', '+79107891155'),
 ('Олейкин', 'Роман', '+79107891166');

insert into auto (brand, model)
values ('BMW', 'X5');
insert into auto (brand, model)
values ('BMW', 'X6');
insert into auto (brand, model)
values ('BMW', 'X7');

insert into deal (customer_id, auto_id, amount, price, date_deal)
values (1, 1, 1, 2000000, '2022-07-01');
insert into deal (customer_id, auto_id, amount, price, date_deal)
values (2, 2, 2, 3500000, '2022-07-02');
insert into deal (customer_id, auto_id, amount, price, date_deal)
values (3, 3, 1, 2000000, '2022-07-02');
insert into deal (customer_id, auto_id, amount, price, date_deal)
values (2, 3, 1, 2000000, '2022-07-02');
insert into deal (customer_id, auto_id, amount, price, date_deal)
values (2, 1, 2, 2000000, '2022-07-02');
insert into deal (customer_id, auto_id, amount, price, date_deal)
values (1, 2, 1, 3000000, '2022-07-03');

