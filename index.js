const express = require('express');
const path = require('path');
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, '0.0.0.0', () => {
  console.log(`servce run at 0.0.0.0:3000`);
})
