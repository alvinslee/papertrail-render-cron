require('dotenv').config();
const fetch = require('node-fetch');


(async () => {
  const response = await fetch(`${process.env.WEBROOT}/`)
  const result = await response.json()
  console.log(result)
  return result
})();

