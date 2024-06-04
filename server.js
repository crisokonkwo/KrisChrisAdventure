const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const correctPassword = 'chrisandkris25'; // Define your correct password here

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/index', (req, res) => {
    const { name, password } = req.body;

    if (password === correctPassword) {
        const log = `${new Date().toISOString()} - Login successful for: ${name}\n`;
        fs.appendFileSync('login_log.txt', log);

        res.redirect(`/welcome-page.html?to=${encodeURIComponent(name)}`);
    } else {
        const log = `${new Date().toISOString()} - Login failed for: ${name}\n`;
        fs.appendFileSync('login_log.txt', log);

        res.redirect('/login.html?error=Incorrect%20password');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});