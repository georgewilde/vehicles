import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

import { VehiclesService } from './vehicles.service';
import { VehiclesRepository } from './vehicles.repository';

const expect = require('chai').expect;

@Injectable()
class MockVehiclesRepository {
    public getVehicles(): any {
        return Observable.of([{
            id: 'xe',
            modelYear: 'k17',
            url: '/api/vehicle/xe',
            media: [
                {
                    name: 'vehicle',
                    url: '/images/xe_k17.jpg'
                }
            ]
        }, {
            id: 'xf',
            modelYear: 'k17',
            url: '/api/vehicle/xf',
            media: [
                {
                    name: 'vehicle',
                    url: '/images/xf_k17.jpg'
                }
            ]
        }]);
    }

    public getVehicle(vehicle: any): any {
        if ('xe' === vehicle) {
            return Observable.of({
                id: 'xe',
                description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
                price: '£30,000',
                meta: {
                    passengers: 5,
                    drivetrain: [
                        'AWD',
                        'RWD'
                    ],
                    bodystyles: [
                        'saloon'
                    ],
                    emissions: {
                        template: 'CO2 Emissions $value g/km',
                        value: 99
                    }
                }
            });
        }

        if ('xf' === vehicle) {
            return Observable.of({
                id: 'xf',
                description: 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
                price: '£36,000',
                meta: {
                    passengers: 5,
                    drivetrain: [
                        'AWD',
                        'RWD'
                    ],
                    bodystyles: [
                        'saloon'
                    ],
                    emissions: {
                        template: 'CO2 Emissions $value g/km',
                        value: 104
                    }
                }
            });
        }
    }
}

describe('VehiclesService', () => {
    describe('getVehicles', () => {
        let service: VehiclesService;
        let vehicleRepository: VehiclesRepository;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    VehiclesService,
                    {provide: VehiclesRepository, useClass: MockVehiclesRepository}
                ]
            });

            service = TestBed.get(VehiclesService);
            vehicleRepository = TestBed.get(VehiclesRepository);
        });

        it('should create an instance', () => {
            expect(service).to.exist;
        });
    });
});
