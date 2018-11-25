// basis for turn bases strategy
var gold = 100
var food = 10
var poulation = 200
var manpower = poulation / 50
var steel = 1


function heropower(){return (this.stats.strength + this.stats.willpower + this.stats.intelligence)}

function hero
    (
        name, age, gender, 
        strength, willpower, intelligence
    )  

    return {
        (
            this.generalInfo = (this.name: name ), (this.age: age), (this.gender: gender),
            this.stats = {(this.strength: strength), (this.willpower: willpower), (this.intelligence: intelligence)},
            this.power = (heropower ())
        )
    }