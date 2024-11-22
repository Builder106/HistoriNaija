const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example route
app.post('/process', (req, res) => {
    const { input } = req.body;
    const result = `AI processed: ${input}`;
    console.log(result)
    res.json({ result });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
