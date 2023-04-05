USE gitup_db;

INSERT INTO Users
    (name, username, password)
VALUES
    ('Tristan', 'tElsener74', '1234'),
    ('Christan', 'cHardin33', '4321'),
    ('Batman', 'notBurceWayne', '1111')
    ON DUPLICATE KEY UPDATE username = username;

INSERT IGNORE INTO HealthData
    (userID, date, hoursSlept, calories, protien, carbohydrates, fat, weight)
VALUES
    (1, '2022-03-04', 8, 2500, 205, 140, 80, 200),
    (1, '2022-01-02', 7, 1800, 80, 180, 40, 151.2),
    (2, '2022-01-01', 6, 1500, 70, 150, 30, 130.8),
    (2, '2022-01-04', 7, 1800, 80, 180, 40, 151.2),
    (3, '2022-01-02', 6, 1500, 70, 150, 30, 130.8);


INSERT IGNORE INTO Goals
    (userID, type, target, targetDate)
VALUES
    (1, 'weight_loss', 140, '2022-05-01'),
    (1, 'strength_training', 100, '2022-06-01'),
    (2, 'cardio', 60, '2022-07-01'),
    (3, 'weight_loss', 130, '2022-10-01'),
    (3, 'strength_training', 80, '2022-11-01');
