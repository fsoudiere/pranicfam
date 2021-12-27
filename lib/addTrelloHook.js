// Get any environment variables we need

const fetch = require('node-fetch');

const body = {
  "callbackURL": "https://api.vercel.com/v1/integrations/deploy/prj_a0L3v8WjnHGJYTJtXzKscnfh8qwS/7efRrpSBlJ",
  "description": "Trello Vercel Hook"
}

fetch(`https://api.trello.com/1/boards/61ba2e67f5a6fc77c9ac2432?key=2aa8a9ad9d82f44db8c2294d62ed69e9&token=fc56ee4e99864814082558349f9adb9c89303e2283cf385a50acf0ee605df952`, {
  method: 'POST',
  body: body,
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));

  