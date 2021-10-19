const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'IS THIS WORKING???'
    });
});

app.use((req, res) => {
    res.status(404).end();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});