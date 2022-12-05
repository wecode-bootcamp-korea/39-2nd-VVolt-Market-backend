-- migrate:up
ALTER TABLE `users` MODIFY `address` varchar(50) NULL;
ALTER TABLE `users` MODIFY `latitude` DECIMAL(16,14) NULL; 
ALTER TABLE `users` MODIFY `longitude` DECIMAL(17,14) NULL;
ALTER TABLE `users` MODIFY `nickname` varchar(50) NULL;
ALTER TABLE `users` MODIFY `social_platform_id` INT NULL;

-- migrate:down

