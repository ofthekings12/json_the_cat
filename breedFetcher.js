const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      if (error) {
        callback(error, null); // pass the error to the callback
      } else {
        const data = JSON.parse(body);

        if (!data || data.length === 0) { // if the breed does not exist this will be empty array
            console.log('not a real breed :(')
            callback('not a breed', null); // we have to set description to null if it does not exist
            return;
        }
        
        callback(null, data[0].description); // if it's a real breed call the callback with the description
      }
    }
  );
};

module.exports = {
  fetchBreedDescription,
};
