const redisMain = require("redis")
const redis = redisMain.createClient();
redis.on('error', (err) => console.log('Redis Client Error', err))
redis.connect().then(async r => {
    console.log("Redis Ready signed by TYN")
    // redis.set("imagesId", 1000)
    // YAZMA KISMI
    // redis.set("lastUserId", 5823)
    // redis.set("lastMerchantId", 7272)
    // redis.set("lastWalletId", 5858)
    // redis.set("lastProcessId", 2323)
    // OKUMA KONTROL KISMI
    // redis.get("imagesId").then(q=>{console.log(q)})
    // redis.get("lastMerchantId").then(q=>{console.log(q)})
    // redis.get("lastWalletId").then(q=>{console.log(q)})
    // redis.get("lastProcessId").then(q=>{console.log(q)})
})
const db = require('./mongodb');

/**
 * @function Promise
 * @description Oluşturmak istediğiniz id nin hangi id ye ait olduğunu yazınız
 * @type string
 * @field `lastUserId` `lastMerchantId` `lastWalletId` `lastProcessId` `courseId`
*/
exports.id = async (which) => {
    var id = await redis.get(which)
    id = Number(id)
    id++
    redis.set(which, id)
    return id.toString()
}

exports.api = (id) => {
    return {
        merchant_id: id,
        merchant_key: code(8, "upperText"),
        merchant_salt: code(12, "upperText")
    }
}

exports.blog = async (beautifyTitle) => {
    var blog = await db.find(beautifyTitle, "blogs")
    var output = await twing.render("/pages/blog-detail.twig", { blog })
    return output
}
exports.code = (n, type) => {
    var length = 32,
        textCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        textUpperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        numbers = "0123456789",
        retVal = "";
    if (type == "text") {
        for (var i = 0; i < n; ++i) {
            retVal += textCharset.charAt(Math.floor(Math.random() * textCharset.length));
        }
    } else if (type == "number") {
        for (var i = 0; i < n; ++i) {
            retVal += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    } else if (type == "upperText") {
        for (var i = 0; i < n; ++i) {
            retVal += textUpperCharset.charAt(Math.floor(Math.random() * textUpperCharset.length));
        }
    }
    return retVal;
}

function shortDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //Ocak ayı 0
    var yyyy = today.getFullYear();

    today = `${dd}-${mm}-${yyyy}`
    return today
}

function date() {
    return Date()
}

function simpleFullDate() {
    var hour = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    var date = shortDate()
    var time = date + " " + hour
    return time
}

function miliseconds() {//-
    return Date.now()
}

exports.shortDate = () => {//-
    return shortDate()
}

exports.date = () => {//-
    return date()
}

exports.simpleFullDate = () => {
    return simpleFullDate
}

exports.miliseconds = () => {
    return miliseconds
}

exports.fullTime = () => {
    return {
        miliseconds: miliseconds(),
        shortDate: shortDate(),
        date: date(),
        simpleFullDate: simpleFullDate(),
        classicDate: new Date()
    }
}

function kurumlarTemp(arr) {
    var temp = {}
    arr.forEach(e => {
        temp[e.id] = {
            name: e.name,
            id: e.id,
            mail: e.mail,
            view: {
                status: false,
                date: null
            },
            status: "Değerlendirme", // Değerlendirme, Kabul Edildi, Reddedildi, API, Kaçırılan, "Arşiv"
            comment: "Başvuru değerlendirmenizi bekliyor",
            responseDate: null,
            archive: false
        }
    });
    return temp
}

// exports.kurumlar = (special) => {
//     if (special == false) {
//         return db2.findProject({ puan: { $gt: 30 } }, { _id: 0, id: 1, name: 1, mail: 1 }, "kurumlar").then(q => {
//             return kurumlarTemp(q)
//         })
//     } else {
//         return db2.findProject({ id: special }, { _id: 0, id: 1, name: 1, mail: 1 }, "kurumlar").then(q => {
//             if (q.length > 0) {
//                 return kurumlarTemp(q)
//             } else {
//                 return db2.findProject({ puan: { $gt: 30 } }, { _id: 0, id: 1, name: 1, mail: 1 }, "kurumlar").then(q => {
//                     return kurumlarTemp(q)
//                 })
//             }
//         })
//     }
// }

exports.companies = (special) => {
    if (special == false) {
        return db2.findProject({ puan: { $gt: 30 } }, { _id: 0, id: 1, name: 1, mail: 1 }, "kurumlar").then(q => {
            return kurumlarTemp(q)
        })
    } else {
        return db2.findProject({ id: special }, { _id: 0, id: 1, name: 1, mail: 1 }, "kurumlar").then(q => {
            if (q.length > 0) {
                return kurumlarTemp(q)
            } else {
                return db2.findProject({ puan: { $gt: 30 } }, { _id: 0, id: 1, name: 1, mail: 1 }, "kurumlar").then(q => {
                    return kurumlarTemp(q)
                })
            }
        })
    }
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

exports.shuffle = (arr) => {
    return shuffle(arr)
}

function code(n, type) {
    var length = 32,
        textCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        textUpperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        numbers = "0123456789",
        retVal = "";
    if (type == "text") {
        for (var i = 0; i < n; ++i) {
            retVal += textCharset.charAt(Math.floor(Math.random() * textCharset.length));
        }
    } else if (type == "number") {
        for (var i = 0; i < n; ++i) {
            retVal += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    } else if (type == "upperText") {
        for (var i = 0; i < n; ++i) {
            retVal += textUpperCharset.charAt(Math.floor(Math.random() * textUpperCharset.length));
        }
    }
    return retVal
}