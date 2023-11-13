const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/register', (req, res) => {
    const { name, address, gender, email, password } = req.body;
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Gender:", gender);
    console.log("Email:", email);
    console.log("Password:", password);
    res.send('Registration successful!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
