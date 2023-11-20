# verimor-node-sdk
The node client for verimor api.

This repository is a rest client written in node for verimor api. REST documentation can be found at: [https://github.com/verimor/SMS-API](https://github.com/verimor/SMS-API)

## Requirements
- node.js
- [https://verimor.com.tr](A verimor) account.
- Enable API transactions, create an API password, enter allowed IP addresses.
- Make sure you have enough balance to send sms messages.

## Installation
```sh
npm i verimor-node-sdk
```

## Usage
There are many endpoints available in the official api. This library contains only sending sms.

### Sending SMS
Get client:
```js
const sdk = require('verimor-node-sdk')
const client = sdk.createClient({
  username: '',
  password: ''
})
```
Send:
```js
const payload = {
  source_addr: '' /* Your registered phone number or title */,
  messages: [
    {
      msg: 'Hello. This is a test message.',
      dest: '905556667788,905557778899'
    }
  ]
}
const result = await client.send(payload)
if (result.error) {
  // fail, read the error message in result.error
}
else {
  // success
  const id = result.id
}
```

## Tests
Tests are written in tests folder and can be run with `npm test`. You need to create your own credentials file in `credentials/credentials.json`

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
