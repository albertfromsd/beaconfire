class Vehicle {
    constructor(engine, speed) {
        this.engine = engine;
        this.speed = speed;        
    }

    info = () => console.log(this.engine, this.speed);

}
const vehicle1 = new Vehicle('steam', 100);
vehicle1.info();


class Car extends Vehicle{
    constructor(engine, speed, wheels, brake) {
        super(engine, speed);
        this.wheels = wheels;
        this.brake = brake;
    }
    honk = () => console.log('honk!');
    
    static isTesla(car) {
        console.log(car.brake);
        return car.brake;
    }
}
const car1 = new Car( 'engine1', 99, 4, true );
Car.isTesla(car1);

const car2 = new Car( 'engine2', 98, 2, false );
Car.isTesla(car2);