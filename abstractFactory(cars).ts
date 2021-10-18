interface  AbstractFactory{
    createCar(): AbstractCar;
}

class ToyotaFactory implements AbstractFactory {
    public createCar(): AbstractCar{
        return new Toyota();
    }
}

class FordFactory implements AbstractFactory {
    public createCar(): AbstractCar {
        return new Ford();
    }
}

interface AbstractCar {
    color(): string;
    model(): string;
}

class Toyota implements AbstractCar {
    public color(): string {
        return 'White'
    }

    public model(): string {
        return 'Camry'
    }
}

class Ford implements AbstractCar {
    public color(): string {
        return 'Red'
    }

    public model(): string {
        return 'Focus'
    }
}


function clientCode(factory: AbstractFactory) {
    const clientCar = factory.createCar();
    
    console.log(clientCar.model, clientCar.color);
}

clientCode(new ToyotaFactory())