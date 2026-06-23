class Car{
    public brand:string
    private speed:number
    protected fuel:string

    constructor(brand:string,speed:number,fuel:string){
        this.brand=brand
        this.speed=speed
        this.fuel=fuel
    }

    public accelerate(){
        this.speed+=10
        console.log(this.speed)
    }

    public refuel(){
        console.log(this.fuel)
    }

    public honk(){
        console.log("Honk honk...")
    }

    public displayCarInfo(){
        console.log("Brand",this.brand)
        console.log("Speed",this.speed)
        console.log("Fuel",this.fuel)
        this.refuel()
        this.honk()
    }
}
let myCar = new Car("Audi",60,"Gas")

console.log("Brand",myCar.brand)
myCar.accelerate()
myCar.displayCarInfo()