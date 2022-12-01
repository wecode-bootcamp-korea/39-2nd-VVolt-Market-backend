const express = require('express');

const multer = require('multer')
const upload = multer({ dest : 'uploads/' })
const app = express();


app.post('/images', upload.single('image'), (req, res) => {
    res.send('ok')
})

app.listen(3001, ()=> {console.log("listening on port 3001")})