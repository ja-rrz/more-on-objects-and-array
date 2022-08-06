let cat = {
    name: "Whiskers",
    walk(){
        console.log("I am walking")
    },
    run(){
        console.log("I am running")
    },
    identify(){
        console.log("I am " + this.name)
    },
    showYourSelf(){
        console.log(this)
    },
    setAge(_age){
        cat.age = _age
    },
    getAge(_age){
        let catHasAge = this.age; 
        if (catHasAge){
            return this.age
        }


        this.setAge(20)
        return this.age
    }
}
cat.walk()
cat.run()
cat.identify()
cat.showYourSelf()
//cat.setAge(20)
console.log(cat.age)
console.log(cat)
console.log(cat.getAge())
console.log(cat.hasOwnProperty('age'))
let keys = Object.keys(cat)
console.log(keys)
let values = Object.values(cat)
console.log(values)
let entries = Object.entries(cat)
console.log(entries)
