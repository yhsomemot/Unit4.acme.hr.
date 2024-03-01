const express = require('express')
const app = express()
const pg = require('pg')
const client = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/acme_notes_categories_db'
)
const port = process.env.PORT || 3000

app.use(express.json())
app.use(require('morgan')('dev'))

app.get('/api/employees', async (req, res, next) => {})
app.get('/api/departments', async (req, res, next) => {})
app.post('/api/employees', async (req, res, next) => {})
app.delete('/api/employees/:id', async (req, res, next) => {})
app.put('/api/employees/:id', async (req, res, next) => {})

const init = async () => {
    let SQL = `
    DROP TABLE IF EXISTS employees;
    DROP TABLE IF EXISTS departments;    
    `;


};

init();