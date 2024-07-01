const express = require("express");
const cors = require("cors");
const db = require('./db/db');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get("/api/movies", function (req, res) {
    db.query('SELECT * FROM movielist', function (err, results) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json(results)
    })
})

app.get("/api/movies/:id", function (req, res) {
    db.query('SELECT * FROM movielist WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json(results)
    })
})

app.post("/api/movies", function (req, res) {
    const body = req.params.body
    const values = `('${body.title}','${body.reqs}','${body.status}')`;
    db.query('INSERT INTO movielist (title, reqs,status ) VALUES ' + values, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json(results)
    })
})

app.patch("/api/movies/:id", function (req, res) {
    const body = req.params.body

    const updateColumns = Object.entries(body).map(b => {
        const [column, value] = b;
        return `${column} = '${value}'`
    });

    db.query('UPDATE movielist SET ' + updateColumns.join(", ") + 'WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json(results)
    })
})

app.delete("/api/movies/:id", function (req, res) {
    db.query('DELETE * FROM movielist WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json(results)
    })
})

const port = 4000;
app.listen(port, (req, res) => console.log(`Listening at port ${port}`));
