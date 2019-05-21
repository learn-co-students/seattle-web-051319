---
title: Sql Intro
layout: post
---

# sql-intro

## SWBATs

* Explain persistence and the need for using SQL
* Define SQL
* Explain the difference between SQLite3 and SQL
* Explore provided data through SQLite Browser
* Perform CRUD actions on a single table
* Perform CRUD actions across related tables

### What is SQL?

SQL stands for Structured Query Language and is a language that allows us to do:

* Store / persist information
* Manipulate that information

SQLite3 is a relational database.

Some specific actions that we can do are CRUD actions, a common acronym we'll see throughout the program, web development, and computing in general:

* Create data
* Read data
* Update data
* Delete data

### Practice SQL CRUD

Investigate the schema of the database; the structure of the database. If in the command line, use `.schema`, if in browser, use "Database Structure" tab.

After each challenge, check the database structure to verify that the changes were made successfully.

When you get to problem four, ask students about relationships between tables and cover the definition of relational databases.

> **Student Challenges:**
>
> 1. Write the SQL to return all of the rows in the artists tables
>
>    `SELECT * FROM artists`
>
> 2. Write the SQL to select the artist with the name "Black Sabbath"
>
>    `SELECT * FROM artists WHERE name = 'Black Sabbath'` &gt; `SELECT * FROM artists WHERE LIKE = 'Black Sabbath'`
>
> 3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text
>
>    `CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT)`
>
> 4. Write the SQL to alter the fans table to have an artistId column of type integer
>
>    `ALTER TABLE fans ADD COLUMN artistId INTEGER`
>
> 5. Write the SQL to add yourself as a fan of the Black Eyed Peas \(artistId = 169\) `INSERT INTO fans (name, artistId) VALUES ("Your name", 169)`
>
>    Don't add an ID manually, but show that you can do it
>
> 6. Return fans that are not fans of the Black Eyed Peas \(artistId = 169\) `SELECT * FROM fans WHERE artistId IS NOT 169`
>
> 7. Return artists name next to their album title


