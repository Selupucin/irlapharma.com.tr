const fs = require('fs')
const assert = require('assert')
const colors = require('colors')
const sdk = require('../lib')
const credentials = JSON.parse(fs.readFileSync('./credentials/credentials.json', 'utf8'))

assert.deepStrictEqual(typeof sdk.createClient, 'function')

const client = sdk.createClient(credentials)

const payload = {
  source_addr: credentials.origin,
  custom_id: credentials.myCampaignID,
  messages: [
    {
      msg: 'Hey, this is a test message.',
      dest: credentials.mynumber
    }
  ]
}
client.send(payload).then(function(resp) {
  assert.deepStrictEqual(typeof resp.id, 'string')

  console.log('All tests pass!'.green)
})
