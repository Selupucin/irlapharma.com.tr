var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID
var db;
var databaseName = "maremeze"
MongoClient.connect(`mongodb://78.135.107.57:27017/${databaseName}`, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err

    db = client.db(databaseName)
    if (db) {
        console.log(`MongoDb is connected ${databaseName}`)
    }
})

exports.find = (query, whichCollection) => {
    return db.collection(whichCollection).find(query).toArray()
}

exports.findOne = async (query, whichCollection) => {
    return await db.collection(whichCollection).findOne(query)
}

exports.findProject = (query,project, whichCollection) => {
    return db.collection(whichCollection).find(query).project(project).toArray()
}

exports.findOrderBy = (query, order, whichCollection) => {
    return db.collection(whichCollection).find(query).sort({ [order]: -1 }).toArray()
}

exports.findAndUpdate = (search, data, whichCollection) => {
    return db.collection(whichCollection).findOneAndUpdate(search, { $set: data })
}
exports.findAndPushUpdate = (search, data, whichCollection) => {
    return db.collection(whichCollection).findOneAndUpdate(search, { $push: data })
}

exports.findOrderByLimitSkip = (query, order, limit, skip, whichCollection) => {
    var data = {}
    return db.collection(whichCollection).find(query).sort({ [order]: 1 }).skip(skip).limit(limit).toArray().then(results => {
        return db.collection(whichCollection).find(query).count().then(n => {
            data.results = results
            data.n = n
            return data
        })
    })
}

exports.findLimit = (query, limit, whichCollection) => {
    return db.collection(whichCollection).find(query).limit(limit).toArray()
}

exports.findId = (id, whichCollection) => {
    return db.collection(whichCollection).find({ "_id": new ObjectId(id) }).toArray()
}

exports.write = (data, whichCollection) => {
    return db.collection(whichCollection).insertOne(data)
}

exports.deleteCollection = (colName) => {
    return db.collection(colName).drop()
}

exports.deleteFindDocument = (value, findNameField, whichCollection) => {
    return db.collection(whichCollection).deleteOne({ [findNameField]: value })
}

exports.deleteIdDocument = (id, whichCollection) => {
    return db.collection(whichCollection).deleteOne({ "_id": new ObjectId(id) })
}

exports.update = (value, findNameField, whichCollection) => {
    return db.collection(whichCollection).updateOne({ [findNameField]: value }, { $set: data, $currentDate: { lastModified: true } })
}

exports.updateId = (id, data, whichCollection) => {
    return db.collection(whichCollection).updateOne({ "_id": new ObjectId(id) }, { $set: data, $currentDate: { lastModified: true } })
}

exports.bulk = (arr, whichCollection) => {
    return db.collection(whichCollection).insertMany(arr)
}

exports.count = (whichCollection) => {
    return db.collection(whichCollection).countDocuments()
}

// setTimeout(() => {
//     db.listCollections().toArray((err,collinfos)=>{
//         console.log(collinfos)
//     })
// }, 4000);

////////////////////////// EXAMPLE QUERY FOR APP.JS //////////////////////////
// db.find({name:"TAHİR YAĞIZCAN"},"vatandas").then((result)=>{console.log(result)})
////////////////////////// EXAMPLE QUERY FOR APP.JS //////////////////////////

////////////////////////// EXAMPLE WRITE SINGLE FOR APP.JS //////////////////////////
// db.write(req.body,"vatandas").then((result)=>{console.log(result.message.parsed)})
////////////////////////// EXAMPLE WRITE SINGLE FOR APP.JS //////////////////////////

////////////////////////// EXAMPLE WRITE BULK DATA FOR THIS JS //////////////////////////
// db.collection('medicines').insertMany(myArray);
////////////////////////// EXAMPLE WRITE BULK DATA FOR THIS JS //////////////////////////

////////////////////////// EXAMPLE WRITE SINGLE DATA FOR THIS JS //////////////////////////
// db.collection('medicines').insertOne(myArray);
////////////////////////// EXAMPLE WRITE SINGLE DATA FOR THIS JS //////////////////////////

////////////////////////// EXAMPLE FIND AND DELETE SINGLE DOCUMENT FOR APP.JS //////////////////////////
// db.deleteFindDocument(1587821824640,"id","newPharmacy").then((q)=>{console.log(q.deletedCount)})
////////////////////////// EXAMPLE FIND AND DELETE SINGLE DOCUMENT FOR APP.JS //////////////////////////

////////////////////////// EXAMPLE ID DELETE DOCUMENT FOR APP.JS //////////////////////////
// db.deleteFindDocument("5ea447a1ee92529d50bdefe8","newPharmacy").then((q)=>{console.log(q.deletedCount)})
////////////////////////// EXAMPLE ID DELETE DOCUMENT FOR APP.JS //////////////////////////

////////////////////////// EXAMPLE ID FIND DOCUMENT FOR APP.JS //////////////////////////
// db.findId("5ea5556194323e3c734604b7","newPharmacy").then((q)=>{console.log(q[0])})
////////////////////////// EXAMPLE ID FIND DOCUMENT FOR APP.JS //////////////////////////

////////////////////////// EXAMPLE ID UPDATE DOCUMENT FOR APP.JS //////////////////////////
// db.updateId("5ea5556194323e3c734604b7", { name: "Tahir" }, "newPharmacy").then((q)=>{console.log(q.modifiedCount)})
////////////////////////// EXAMPLE ID UPDATE DOCUMENT FOR APP.JS //////////////////////////