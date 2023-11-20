const sdk = require('verimor-node-sdk')
const client = sdk.createClient({
    username: '08502554441',
    password: 'Nikolatesla72'
})

exports.sendCode = (code, dest) => {
    var payload = {
        source_addr: "08502554441",
        messages: [
            {
                msg: `Depremzade.com'a hoş geldiniz! Başvurunuzu etkinleştirmek için lütfen doğrulama kodunu girin: ${code} . Eğer bu kodu talep etmeden önce bir başvuru oluşturmadıysanız, lütfen bu mesajı görmezden gelin.`,
                dest
            }
        ]
    }
    return client.send(payload).then(q => {
        return "Gönderildi"
    }).catch(err => {
        return "Gönderilemedi"
    })
}