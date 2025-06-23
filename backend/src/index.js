const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/travel', (req, res) => {
    res.json({ message: 'Welcome to the Travel Agency API!' });
});

// Additional routes can be defined here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});