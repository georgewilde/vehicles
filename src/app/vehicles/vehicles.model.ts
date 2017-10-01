export class VehicleMedia {
    public name: string;
    public url: string;
}

export class VehicleEmmision {
    public template: string;
    public value: number;
}

export class VehiceMeta {
    public passengers: number;
    public drivetrain: Array<string>;
    public bodystles: Array<string>;
    public emissions: Array<VehicleEmmision>;
}

export class Vehicle {
    public id: string;
    public modelYear: string;
    public url: string;
    public media: Array<VehicleMedia>;
    public description?: string;
    public price?: string;
    public meta?: VehiceMeta;
}
