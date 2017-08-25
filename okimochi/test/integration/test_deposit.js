const Botmock = require('botkit-mock')
const helpHandler = require('../../src/handlers/help')
const assert = require('assert')
const locale_message = require('../../config').locale_message

describe('deposit Controller Tests', () => {
  beforeEach(() => {
    this.controller = Botmock({})
    this.bot = this.controller.spawn({type: 'slack'})
    helpHandler(this.controller)
  })

  it('should show bitcoin address when user begs for deposit', (done) => {
    this.bot.usersInput(
      [
        {
          user: 'someUserId',
          channel: 'someChannel',
          messages: [
            {
              text: 'deposit', isAssertion: true
            }
          ]
        }
      ]
    )
    .then((message) => {
      return assert.equal(message.text, locale_message.deposit)
    })
  })
})
