CREATE ROLE cbum WITH LOGIN PASSWORD '123qwe' SUPERUSER CREATEDB CREATEROLE INHERIT;
CREATE DATABASE IF NOT EXISTS gym OWNER cbum;