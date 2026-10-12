CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password_hash` text NOT NULL,
	`created_at` integer DEFAULT '"2026-10-07T15:19:45.305Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2026-10-07T15:19:45.305Z"' NOT NULL,
	CONSTRAINT "email_format" CHECK("users"."email" LIKE '%@%.%')
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);