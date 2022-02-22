const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(fileUpload())

app.post('/', (req, res) => {
    console.log(req.files);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('server has started')
})