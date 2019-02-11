This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Untappd Brewerylist

Make a list of breweries based on information from Untappd. 

* You need API keys from Untappd. See https://untappd.com/api/
* Add .env-files in the root folder, and set the keys there. .env.development and .env.production. 

Add these lines in the .env-files:
```
REACT_APP_UNTAPPDID=[api id (remove brackets)]
REACT_APP_UNTAPPDSECRET=[api secret (remove brackets)]
```

* Add Untappd brewery IDs to utils.js in the src folder.
