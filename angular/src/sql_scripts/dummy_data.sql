USE gitup_db;

INSERT INTO Users
    (name, username, password)
VALUES
    ('Tristan', 'tElsener74', '1234'),
    ('Christan', 'cHardin33', '4321'),
    ('Batman', 'notBurceWayne', '1111')
    ON DUPLICATE KEY UPDATE username = username;

INSERT IGNORE INTO HealthData
    (userID, date, calories, timeExercising, distance, age, weight, height)
VALUES
    (1, '2022-03-04', 2500, 60, 5, 21, 200, 6.4),
    (1, '2022-01-02', 1800, 80, 6, 21, 151.2, 6.4),
    (2, '2022-01-01', 1500, 70, 3, 20, 130.8, 5.5),
    (2, '2022-01-04', 1800, 80, 6, 20, 151.2, 5.5),
    (3, '2022-01-02', 1500, 70, 4, 22, 130.8, 5.9);


INSERT IGNORE INTO Goals
    (userID, type, target, targetDate)
VALUES
    (1, 'weight_loss', 140, '2022-05-01'),
    (1, 'strength_training', 100, '2022-06-01'),
    (2, 'cardio', 60, '2022-07-01'),
    (3, 'weight_loss', 130, '2022-10-01'),
    (3, 'strength_training', 80, '2022-11-01');
