const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');


app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(fileUpload({
    createParentPath: true,
    uriDecodeFileNames: true
}))

app.post('/', async (req, res) => {
    console.log(req.files);
    for (let file in req.files) {
        try {
            const name = req.files[file];
            await name.mv(__dirname + '/files/'+ name.name);
        } catch (err) {
            console.error(err);
        }
       
    }
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('server has started')
})