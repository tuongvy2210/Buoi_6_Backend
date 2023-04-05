const express = require('express');
const cors = require('cors');
const dssv= require('./dssv.json');
const fs = require("fs");
const app = express();
app.use(cors({
    origin:["http://127.0.0.1:5500","http://localhost:5500"]
}))
const port = 3000;

app.get('/students', (req, res) => {
    res.send(Object.values(dssv));
});

app.get('/students/:mssv', (req, res) => {
    // let i = 0;
    // for (i = 0; i < dssv.length; i++) {
    //     if (dssv[i].MaSV == req.params.mssv)
    //         break;
    // }
    // if (i < dssv.length) {
    //     res.send(dssv[i]);
    // }
    // else {
    //     res.send("Not found");
    // }

    res.send(dssv.find(sv=>sv.MaSV===req.params.mssv));

});

app.post('/students', (req, res) => {
    res.send("POST STUDENTS");
});

app.put('/students', (req, res) => {
    res.send("PUT STUDENTS");
});

app.delete('/students', (req, res) => {
    res.send("DELETE STUDENTS");
});

const server = app.listen(port, () => {
    console.log(`app is running at port ${port}`)
});