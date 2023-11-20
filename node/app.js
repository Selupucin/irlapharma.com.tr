const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3510
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');
let loader = new TwingLoaderFilesystem('static');
var twing = new TwingEnvironment(loader)
app.use('*assets/', express.static('static/assets/'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// GET Requests
// Index
app.get('/', (req, res) => {
  twing.render("/pages/index.twig", {title: "Anasayfa", titleSub: "index"}).then(output => {
    res.send(output)
  })
})
// About
app.get('/about', (req, res) => {
  twing.render("/pages/about.twig", {title: "Hakkımızda", titleSub: "about"}).then(output => {
    res.send(output)
  })
})
// Product
app.get('/product', (req, res) => {
  twing.render("/pages/product.twig", {title: "Liberox", titleSub: "product"}).then(output => {
    res.send(output)
  })
})
// FAQ
app.get('/faq', (req, res) => {
  twing.render("/pages/faq.twig", {title: "S.S.S", titleSub: "faq"}).then(output => {
    res.send(output)
  })
})
// Contact
app.get('/contact', (req, res) => {
  twing.render("/pages/contact.twig", {title: "İletişim", titleSub: "contact"}).then(output => {
    res.send(output)
  })
})
// GET Requests End

// Post Requests
// Post Requests End

// Site Map -- Don't Delete!
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(__dirname + '/sitemap.xml');
});

// Site Map -- Don't Delete!
app.get('/robots.txt', (req, res) => {
  res.sendFile(__dirname + '/robots.txt');
});

// htaccess -- Don't Delete!
app.get('/robots.txt', (req, res) => {
  res.sendFile(__dirname + '/.htaccess');
});

// 404 Requests -- Don't Delete!
app.use((req, res, next) => {
  res.status(404).redirect("/")
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
