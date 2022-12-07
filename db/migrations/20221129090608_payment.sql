-- migrate:up
CREATE TABLE payment (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
amount INt NOT NULL,
orderId VARCHAR(100) NOT NULL,
paymentKey VARCHAR(100) NOT NULL
)


-- migrate:down

