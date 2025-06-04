BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS alternatives (
    alternative_id INTEGER PRIMARY KEY AUTOINCREMENT,
    alternative_letter CHAR(1) NOT NULL,
    alternative_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL CHECK(is_correct IN (0,1)),
    question_id INTEGER NOT NULL,
    UNIQUE(question_id, alternative_letter),
    FOREIGN KEY(question_id) REFERENCES questions(q_id)
);
CREATE TABLE IF NOT EXISTS categories (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS questions (
    q_id INTEGER PRIMARY KEY AUTOINCREMENT,
    q_title TEXT NOT NULL,
    q_text TEXT NOT NULL,
    q_year INTEGER CHECK(q_year BETWEEN 1900 AND 2100) NOT NULL,
    q_category_id INTEGER NOT NULL,
    q_subcategory_id INTEGER NOT NULL,
    FOREIGN KEY(q_category_id) REFERENCES categories(category_id),
    FOREIGN KEY(q_subcategory_id) REFERENCES subcategories(subcategory_id)
);
CREATE TABLE IF NOT EXISTS subcategories (
    subcategory_id INTEGER PRIMARY KEY AUTOINCREMENT,
    subcategory_name TEXT NOT NULL UNIQUE,
    category_id INTEGER NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(category_id)
);
INSERT INTO "alternatives" ("alternative_id","alternative_letter","alternative_text","is_correct","question_id") VALUES
 ('A','Água produzida na respiração',1,1),
 ('B','piruvato produzido na glicólise',0,1),
 ('C','etanol produzido na fermentação.',0,1),
 ('D','glicose produzida na fotossíntese',0,1),
 ('E','gás carbônico produzido no ciclo de Krebs',0,1)

--  (7,'E','ESTOU AMANDO SEI LA PORRAAA',1,1);
INSERT INTO "categories" ("category_id","category_name") VALUES (1,'Matemática'),
 (2,'História'),
 (3,'Geográfia'),
 (4,'Biologia'),
 (5,'Inglês'),
 (6,'Espanhol'),
 (10,'Spanish'),
 (11,'xampp'),
 (12,'Biologia 2');
INSERT INTO "questions" ("q_id","q_title","q_text","q_year","q_category_id","q_subcategory_id") VALUES (1,'Enem 2022','Em um sistema hipotético mantido sob iluminação, estão presentes uma célula autotrófica e uma célula heterotrófica. A esse sistema são fornecidos água, glicose e gás oxigênio, sendo esse último na forma de ¹⁸O₂.
Ao final de um período de 24 horas, a análise dos compostos presentes nesse sistema permitirá a detecção do isótopo no(a)',2022,4,3);
INSERT INTO "subcategories" ("subcategory_id","subcategory_name","category_id") VALUES (1,'Geometria Plana',1),
 (3,'Citologia',4),
 (4,'Geometria Espacial',1),
 (5,'Sistemas Lineares',1),
 (6,'Álgebra',1),
 (7,'php',11);
COMMIT;
