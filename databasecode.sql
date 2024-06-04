CREATE TABLE messages (
    user_id int(11) AUTO_INCREMENT PRIMARY KEY not null,
    user_name varchar(256) not null,
    user_email varchar(256) not null,
    user_message varchar(256) not null
);

INSERT INTO users (user_name, user_email, user_message, user_uid)
    VALUES ('Chris Okonkwo', 'cris@gmail.com', '103 W Locust Street, Rome, NY 13440');