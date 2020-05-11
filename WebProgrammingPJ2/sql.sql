CREATE TABLE user_info (
	user_id		int	PRIMARY	KEY,
	Firstname	varchar(50)	NOT	NULL,
	Lastname	varchar(50)	NOT	NULL,
	Role		varchar(20)	NOT	NULL,
	password	varchar(100)	NOT	NULL,
	email		varchar(100)	NOT	NULL
);

CREATE TABLE	login_info(
	login_id	int	PRIMARY	KEY,
	user_id		int,
	create_at	timestamp	NOT	NULL,
	FOREIGN	KEY(user_id)
	REFERENCES	user_info(user_id)
);

CREATE	SEQUENCE serial	START	3;
CREATE	SEQUENCE logidsequence	START	1;

INSERT INTO user_info VALUES(1, "admin", "test", "admin", "0000", "admin@mail.com");
INSERT INTO user_info VALUES(2, "user", "test", "general", "0000", "tester@mail.com");
