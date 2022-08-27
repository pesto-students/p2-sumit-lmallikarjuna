CREATE TABLE Cities(
    City varchar(20) PRIMARY KEY,
    State varchar(20)
);

CREATE TABLE Warehouses(
    wid int PRIMARY KEY,
    wname varchar(30),
    location varchar(20),
    Extra_Context JSON,
    FOREIGN KEY (location) REFERENCES Cities(City)
);

CREATE TABLE Stores(
    sid int PRIMARY KEY,
    store_name varchar(20),
    location_city varchar(20),
    wid int,
    FOREIGN KEY (location_city) REFERENCES Cities(City),
    FOREIGN KEY (wid) REFERENCES Warehouses(wid)
);

CREATE TABLE Customer(
    cno int PRIMARY KEY,
    cname varchar(50),
    addr varchar(50),
    cu_city varchar(20),
    FOREIGN KEY (cu_city) REFERENCES Cities(City)
);

CREATE TABLE Orders(
    ono INT PRIMARY KEY,
    odate DATE,
    cno int,
    FOREIGN KEY (cno) REFERENCES Customer(cno)
);

CREATE TABLE Items(
    itemno INT PRIMARY KEY,
    description TEXT,
    weight DECIMAL(5, 2),
    cost DECIMAL(5, 2)
);

CREATE TABLE Order_Items(
    id INT PRIMARY KEY,
    itemno INT NOT NULL,
    cno INT NOT NULL,
    order_qty INT,
    FOREIGN KEY (cno) REFERENCES Orders(cno),
    FOREIGN KEY (itemno) REFERENCES Items(itemno)
);

CREATE TABLE Items_Stores(
    id INT PRIMARY KEY,
    itemno INT NOT NULL,
    sid INT NOT NULL,
    qty INT,
    FOREIGN KEY (sid) REFERENCES Stores(sid),
    FOREIGN KEY (itemno) REFERENCES Items(itemno)
);