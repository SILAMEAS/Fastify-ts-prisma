//1 . yarn install
// make sure connect it to db and correct name password and database
//2. create file .env
// ============ take it in file .env

# Environment variables declared in this file are automatically made available to Prisma.

# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.

# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:123@localhost:5432/testdb"
// make sure you use postgress sql with prisma
//3. check in file schema.prisma

================================
generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}
================================

//4. make sure you already open pgAdmin4 and run server and create db the same name in project "testdb" in point 2
// 5. run project
==> npm run build : for watch tsc don't close
==> npm run dev : watch by nodemon when have something change

//6. run this commond in bash for make sure your server is running
curl localhost:3001/user
