import { Injectable } from '@angular/core';
import { VehiclesRepository } from './vehicles.repository';
import { Vehicle } from './vehicles.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class VehiclesService {
    constructor(private vehiclesRepository: VehiclesRepository) {
    }

    getVehicles(): Observable<Array<Vehicle>> {
        return this.vehiclesRepository.getVehicles()
            .map((vehicles) => vehicles.map((vehicle) => this.vehiclesRepository.getVehicle(vehicle)))
            .mergeMap(vehicleResources => Observable.forkJoin(...vehicleResources));
    }
}
