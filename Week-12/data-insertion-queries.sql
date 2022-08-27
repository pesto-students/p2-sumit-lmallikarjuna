INSERT INTO
    cities
VALUES
    ('Banglore', 'Karnataka'),
    ('Pune', 'Maharastra'),
    ('Mumbai', 'Maharastra'),
    ('Chennai', 'Tamil Nadu'),
    ('Hyderabad', 'Telangana');

INSERT INTO
    customer
VALUES
    (1, 'Abhishek', 'XYZ', 'Pune'),
    (2, 'Vinay', 'XYZR', 'Pune'),
    (3, 'Darshan', 'XYZQ', 'Mumbai'),
    (4, 'Rohan', 'XYWZ', 'Chennai'),
    (5, 'Samarth', 'XYGZ', 'Banglore');

INSERT INTO
    items
VALUES
    (1, 'Charger', 5.2, 300),
    (2, 'Laptop', 3.62, 800),
    (3, 'Laptop bag', 4.62, 400),
    (4, 'Smartphone', 2.3, 205),
    (5, 'Headphones', 2.1, 230);

INSERT INTO
    orders
VALUES
    (1, '2022-02-02', 2),
    (2, '2022-03-05', 1),
    (3, '2022-01-07', 1),
    (4, '2022-05-02', 2),
    (5, '2022-06-04', 3);

INSERT INTO
    warehouses
VALUES
    (1, 'Warehouse-one', 'Pune', null),
    (2, 'Warehouse-two', 'Pune', null),
    (3, 'Warehouse-three', 'Mumbai', null),
    (4, 'Warehouse-four', 'Banglore', null),
    (5, 'Warehouse-five', 'Chennai', null),
    (6, 'Warehouse-six', 'Hyderabad', null),
    (7, 'Warehouse-seven', 'Pune', null);

INSERT INTO
    stores
VALUES
    (1, 'Store-A', 'Pune', 6),
    (2, 'Store-B', 'Pune', 3),
    (3, 'Store-C', 'Mumbai', 1),
    (4, 'Store-D', 'Banglore', 4),
    (5, 'Store-E', 'Chennai', 5),
    (6, 'Store-F', 'Hyderabad', 2),
    (7, 'Store-G', 'Pune', 8),
    (8, 'Store-H', 'Pune', 3);

INSERT INTO
    items_stores
VALUES
    (1, 2, 1, 30),
    (2, 4, 1, 500),
    (3, 5, 2, 1000),
    (4, 1, 4, 2000),
    (5, 3, 5, 3600);

INSERT INTO
    order_items
VALUES
    (1, 2, 1, 10),
    (2, 1, 1, 20),
    (3, 4, 3, 50),
    (4, 3, 2, 100),
    (5, 5, 3, 200);