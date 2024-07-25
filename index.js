const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
    "5136da7caa87e28e1b56c6b0093bfd9c",
    "6f824e6620c38295fb08781877fb125c"
  )

  const request = mailjet
  .post('send', { version: 'v3.1' })
  .request({
    Messages: [
      {
        From: {
          Email: "danielapostolico2014@gmail.com",
          Name: "Mailjet Pilot"
        },
        To: [
          {
            Email: "testeianes01@gmail.com",
            Name: "passenger 1"
          }
        ],
        Subject: "Your email flight plan!",
        TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
        HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
      }
    ]
  })

request
.then((result) => {
  console.log(result.body)
})
.catch((err) => {
  console.log(err.statusCode)
})