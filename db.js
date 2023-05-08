const sqlite3 = require('sqlite3').verbose();
const path ='./insults.sqlite'
const fs = require('fs')

function createDbConnection(){
    if (fs.existsSync(path)) return new sqlite3.Database(path)

    const db = new sqlite3.Database(path, (error)=>{
        if (error) return console.log(error.message)
        createTable(db)

    })
    console.log("Connection with SQLite has been established ")

    return db
}


function createTable (db){
    db.exec(`
        CREATE TABLE insults (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            insult varchar(100) NOT NULL,
            play varchar(50) NOT NULL
        )
    `)
}


module.exports = createDbConnection();