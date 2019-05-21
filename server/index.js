const app = require("./config/app");

const port = 5000;
app.listen(5000, () => {
  console.log(`API listening on port ${port}`);
});
