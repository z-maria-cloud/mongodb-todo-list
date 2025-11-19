# MongoDB Todo List

A todo list app that uses MongoDB as its database engine.

Lets the user create and delete todo list entries.

## Setup

Download the files and then run `npm install`.

Create a `.env` file containing `PROJECT_NAME` and `PROJECT_PORT` before using.

Also remember to set `DB_ADDRESS`, `DB_COLLECTION_NAME` and `DB_NAME`, which will be used to connect to MongoDB.

Here's a sample configuration:

```
PROJECT_PORT=3000
PROJECT_NAME="Todo List App"
DB_ADDRESS="mongodb://127.0.0.1:27017/"
DB_COLLECTION_NAME="todo"
DB_NAME="todolist"
```

## Scripts

- `npm run dev`: will show errors inside the browser, will not cache EJS files, ecc
- `npm run production`: will set NODE_ENV to "production".