USE gitup_db;
DROP TABLE IF EXISTS Users, Goals, HealthData;

CREATE TABLE Users (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE HealthData (
    healthDataID INT PRIMARY KEY AUTO_INCREMENT,
    userID INT,
    date DATE NOT NULL,
    calories INT,
    timeExercising INT,
    distance INT,
    age INT,
    weight DECIMAL(5,2),
    height DECIMAL(5,2),
   FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Goals (
    goalID INT PRIMARY KEY AUTO_INCREMENT,
    userID INT,
    type VARCHAR(50),
    target DECIMAL(5,2),
    targetDate DATE,
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE ON UPDATE CASCADE
);