const { fetchBreedDescription } = require("./breedFetcher"); // use the function exported from the breedFetcherfile

const breedName = process.argv[2]; // get the users input from the cli

fetchBreedDescription(breedName,(error, desc) => {
  // run the function and log the results
  if (error) {
    console.log("Error fetch details; ", error);
  } else {
    console.log(desc);
  }
});
