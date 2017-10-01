import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Vehicle } from './vehicles.model';

@Injectable()
export class VehiclesRepository {
    constructor(private http: Http) {
    }

    getVehicles(): Observable<Array<Vehicle>> {
        return this.http.get(`/api/vehicle`)
            .map((response) => {
                return response.json().vehicles as Array<Vehicle>;
            });
    }

    getVehicle(vehicle: Vehicle): Observable<Vehicle> {
        return this.http.get(`${vehicle.url}`)
            .map((response) => response.json() as Vehicle)
            .map((vehicleResources) => {
                vehicle.price = vehicleResources.price;
                vehicle.description = vehicleResources.description;
                vehicle.meta = vehicleResources.meta;
                return vehicle;
            });
    }
}
