const getDb=require('../util/database').getDb;

class User{
    constructor(name,email,password,phoneno){
        this.name=name;
        this.email=email;
        this.password=password;
        this.phoneno=phoneno;
    }
    save(){
        const db=getDb();
        return db.collection('user')
        .insertOne(this)
        .then((result)=>{
            return db.collection('user').findOne({ _id: result.insertedId });
            
        })
        .catch(err=>{
            console.log(err);
        });
    }
    static findById(email) {
        const db = getDb();
        return db.collection('user')
            .findOne({email:email})
            .then(user => {
                return user;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports=User;