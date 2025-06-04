CREATE DATABASE aracore;
USE aracore;

CREATE TABLE Questions(
    QuestionID INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    introduction TEXT NOT NULL,
    qYear INT(4) NOT NULL,
    discipline TEXT NOT NULL,
    -- alternatives JSON NOT NULL,
)

CREATE TABLE Alternatives(
    id int AUTO_INCREMENT PRIMARY KEY,
    QuestionID int NOT NULL,
    AlternativeText TEXT NOT NULL,
    isCorrect BOOLEAN not null,
    FOREIGN KEY(QuestionID) REFERENCES Questions(QuestionID)
)

"alternatives": [
        {
            "letter": "A",
            "text": "Apresentar uma visão dualista.",
            "file": null,
            "isCorrect": true
        },
        {
            "letter": "B",
            "text": "Confirmar uma tese naturalista.",
            "file": null,
            "isCorrect": false
        },
        {
            "letter": "C",
            "text": "Demonstrar uma premissa relativa.",
            "file": null,
            "isCorrect": false
        },
        {
            "letter": "D",
            "text": "Sustentar um argumento idealista.",
            "file": null,
            "isCorrect": false
        },
        {
            "letter": "E",
            "text": "Defender uma posição intencionalista.",
            "file": null,
            "isCorrect": false
        }
    ]



-- CREATE TABLE Usuarios(
--     userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     cpf INT(11) NOT NULL,

-- )
-- QuestionBanca 



-- CREATE TABLE Alternativas(

--     Correta
-- )