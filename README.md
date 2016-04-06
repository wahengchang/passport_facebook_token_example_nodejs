# passport_facebook_token_example_nodejs

It is a project to implement facebook token login on nodejs. It includes frontend (html and javascript) login user, to get user information and access_token, then passing the asscess_token to localhost:3000/login to server for more action.

## Installation

```
npm install

```

```
//public/login_2.html

appId: 'appId',
```

```
//routes/index.js

clientID        : FACEBOOK_APP_ID,
clientSecret    : FACEBOOK_APP_SECRET

```

## Usage

### Frontend html
* *localhost:3000/login_2.html*

### Post access_token
* */login*

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits
Some of the examples from: [https://developers.facebook.com](https://developers.facebook.com), [https://www.npmjs.com/package/passport](https://www.npmjs.com/package/passport)