CREATE DATABASE IF NOT EXISTS aracore;
USE aracore;

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

-- INSERT INTO categories (category_name) VALUES ("Matemática")

CREATE TABLE subcategories (
    subcategory_id INT AUTO_INCREMENT PRIMARY KEY,
    subcategory_name VARCHAR(100) NOT NULL UNIQUE,
    category_name varchar(100) NOT NULL,
    FOREIGN KEY(category_name) REFERENCES categories(category_name),
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
-- INSERT INTO subcategories (subcategory_name, category_name, category_id) VALUES ())
CREATE TABLE questions (
    q_id INT AUTO_INCREMENT PRIMARY KEY,
    q_title TEXT NOT NULL,
    q_text TEXT NOT NULL,
    q_year INT NOT NULL, -- Removido CHECK(), pois MySQL não suporta diretamente
    q_category_id INT NOT NULL,
    q_subcategory_id INT NOT NULL,
    FOREIGN KEY (q_category_id) REFERENCES categories(category_id),
    FOREIGN KEY (q_subcategory_id) REFERENCES subcategories(subcategory_id)
);

CREATE TABLE alternatives (
    alternative_id INT AUTO_INCREMENT PRIMARY KEY,
    alternative_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    question_id INT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(q_id)
);
