import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicles.model';

@Component({
    selector: 'app-root',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
    public vehicles: Array<Vehicle>;

    constructor(private vehiclesService: VehiclesService) {
    }

    ngOnInit() {
        this.vehiclesService.getVehicles()
            .subscribe((data) => this.vehicles = data);
    }
}
