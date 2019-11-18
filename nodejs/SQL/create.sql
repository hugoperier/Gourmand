CREATE TABLE RIGHT_(
right_id INT AUTO_INCREMENT PRIMARY KEY,
label varchar(30) not null
);

CREATE TABLE USER_(
user_id INT AUTO_INCREMENT PRIMARY KEY,
name_ varchar(30) not null,
surname varchar(30) not null,
ku_id varchar(30) not null,
email varchar(30) not null,
password_ varchar(90) not null,
right_id  INT,
FOREIGN KEY(right_id) REFERENCES RIGHT_(right_id)
);

CREATE TABLE TYPE_PLACE(
type_place_id INT AUTO_INCREMENT PRIMARY KEY,
label varchar(40)
);

CREATE TABLE PLACE(
place_id INT AUTO_INCREMENT PRIMARY KEY,
label varchar(50),
type_id int,
latitude decimal,
longitude decimal,
FOREIGN KEY(type_id) REFERENCES TYPE_PLACE(type_place_id)
);

CREATE TABLE MENU(
menu_id INT AUTO_INCREMENT PRIMARY KEY,
label varchar(50),
price INT,
photo_url varchar(50),
contain_meal BIT,
place_id INT,
FOREIGN KEY(place_id) REFERENCES PLACE(place_id)
);

CREATE TABLE REVIEW(
review_id INT AUTO_INCREMENT PRIMARY KEY,
clean_rate INT,
food INT,
delivery_speed INT,
comment_ varchar(100),
menu_id INT,
place_id INT,
user_id INT,
FOREIGN KEY (menu_id) REFERENCES MENU(menu_id),
FOREIGN KEY (place_id) REFERENCES PLACE(place_id),
FOREIGN KEY (user_id) REFERENCES USER_(user_id)
)