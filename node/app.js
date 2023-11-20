const express = require('express')
const session = require("express-session")
const bodyParser = require('body-parser');
const app = express()
const port = 4040
var lower2 = require("./myModules/beautifier").lower
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');
let loader = new TwingLoaderFilesystem('static');
var twing = new TwingEnvironment(loader)
const db = require("./myModules/mongodb")
app.use('*assets/', express.static('static/assets/'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const get = require("./myModules/get")

// var products = [
//   {
//     category: "meze",
//     status: true,
//     tag: null,
//     image: "assets/images/resource/menu-image-5.png",
//     title: "Haydari",
//     price: "30",
//     description: "deneme"
//   },
//   {
//     category: "meze",
//     status: true,
//     tag: null,
//     image: "assets/images/resource/menu-image-5.png",
//     title: "Humus",
//     price: "40",
//     description: "deneme"
//   },
//   {
//     category: "sandviç",
//     status: true,
//     tag: null,
//     image: "assets/images/resource/menu-image-5.png",
//     title: "Hataylı",
//     price: "65",
//     description: "deneme"
//   },
//   {
//     category: "sandviç",
//     status: true,
//     tag: null,
//     image: "assets/images/resource/menu-image-5.png",
//     title: "İstanbullu",
//     price: "35",
//     description: "deneme"
//   },
//   {
//     category: "salata",
//     status: true,
//     tag: null,
//     image: "assets/images/resource/menu-image-5.png",
//     title: "Mor Lahana Salatası",
//     price: "50",
//     description: "deneme"
//   },
//   {
//     category: "salata",
//     status: true,
//     tag: null,
//     image: "assets/images/resource/menu-image-5.png",
//     title: "Baby Salata",
//     price: "50",
//     description: "deneme"
//   },
// ]
var products = []
setTimeout(async () => {
  products = await db.find({}, "products")
}, 2000);

var user = {
  mail: "deniztokgoz@maremeze.com",
  password: "maremeze2023"
}

app.use(session({
  secret: 'secret-key',
  cookie: {
    maxAge: 124 * 3600 // 1 week
  },
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

async function login(req) {
  req.session.login = true
  req.session.user = {}
}

// GET Requests
// Index
app.get('/', (req, res) => {
  twing.render("/pages/coming-soon.twig", {}).then(output => {
    res.send(output)
  })
})
// Menu
app.get('/menu', (req, res) => {
  twing.render("/pages/menu.twig", { products }).then(output => {
    res.send(output)
  })
})
// Login
app.get('/login', (req, res) => {
  twing.render("/pages/login.twig", {}).then(output => {
    res.send(output)
  })
})
// Control Menu
app.get('/control-menu', (req, res) => {
  if (req.session.login) {
    twing.render("/pages/control-menu.twig", { products }).then(output => {
      res.send(output)
    })
  } else {
    res.redirect("/login")
  }
})
// 404
app.get('/', (req, res) => {
  twing.render("/pages/404.twig", {}).then(output => {
    res.send(output)
  })
})
// GET Requests End

// Post Requests
app.post("/login", (req, res) => {
  var mail = req.body.mail
  var password = req.body.password
  if (user.mail == mail && user.password == password) {
    login(req)
    res.redirect("/control-menu")
  } else {
    res.redirect("/login")
  }
})

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = `/home/maremeze/images/`;

    cb(null, dir)
  },
  filename: async function (req, file, cb) {
    const uniqueSuffix = await get.id("imagesId")
    req.body.id = uniqueSuffix
    cb(null, uniqueSuffix + "-" + lower2(file.originalname))
  }
})
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = file.originalname.split(".")[file.originalname.split(".").length - 1]
    // if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg' && ext !== 'JPEG' && ext !== 'JPG') {
    //   return callback(new Error('Hatalı Dosya Formatı Gönderildi'))
    // }
    callback(null, true)
  }
}).any()



app.post("/control-menu", async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(err, "multer hatası")
      res.send(false)
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log(err, "bilinmeyen")
      res.send(false)
    } else {
      req.body.image = await `https://images.maremeze.com/${req.files[0].filename}`
      var write = await db.write(req.body, "products")
      if (write.acknowledged) {
        products = await db.find({}, "products")
        res.redirect("/control-menu")
      } else {
        res.send(false)
      }
    }
  })
})

app.post("/delete", async (req, res) => {
  var id = await req.body.id
  console.log(req.body)
  await db.deleteIdDocument(id, "products")
  await res.send(true)
  products = await db.find({}, "products")
})

app.post("/update", async (req, res) => {
  var id = await req.body.id
  delete await req.body.id
  var data = await req.body
  if (req.body.status == "true") {
    req.body.status = true
  } else {
    req.body.status = false
  }
  console.log(req.body)
  await db.updateId(id, data, "products")
  products = await db.find({}, "products")
  res.redirect("/control-menu")
})
// Post Requests End

// Site Map -- Don't Delete!
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(__dirname + '/sitemap.xml');
});

// Site Map -- Don't Delete!
app.get('/robots.txt', (req, res) => {
  res.sendFile(__dirname + '/robots.txt');
});

// 404 Requests -- Don't Delete!
app.use((req, res, next) => {
  res.status(404).redirect("/")
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
