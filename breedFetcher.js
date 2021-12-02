const request = require("request");

const userInput = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`,
  function(error, response, body) {
    console.log(`error: ${error}`);
    console.log(`res: ${response}`);
    console.log(`body: ${body}`);

    console.log(typeof body);
    const data = JSON.parse(body);

    if (!data || data.length === 0) {
      console.log(`That wasn't the name of a real cat breed :(`);
    }
    console.log(typeof data);
  }
);
