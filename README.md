# Project Name

A todo list app that uses MongoDB as its database engine.

## Setup

Download the files and then run `npm install`.

Create a `.env` file containing `PROJECT_NAME` and `PROJECT_PORT` before using. Here's a sample configuration:

```
PROJECT_PORT=3000
PROJECT_NAME="Request Info"
DB_COLLECTION_NAME="todo"
DB_NAME="todolist"
```

## Scripts

- `npm run dev`: will show errors inside the browser, will not cache EJS files, ecc
- `npm run production`: will set NODE_ENV to "production".