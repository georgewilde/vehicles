import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesRepository } from './vehicles/vehicles.repository';
import { VehiclesService } from './vehicles/vehicles.service';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        VehiclesComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        VehiclesRepository,
        VehiclesService
    ],
    bootstrap: [
        VehiclesComponent
    ]
})
export class AppModule {
}
