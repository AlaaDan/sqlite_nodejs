const db = require('./db')

function list(){
    db.each(`SELECT * FROm insults`, (error, row)=>{
        if (error) console.log(error)

        console.log(row)
    })
}

list();