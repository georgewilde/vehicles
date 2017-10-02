import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { VehiclesService } from './vehicles.service';
import { VehiclesRepository } from './vehicles.repository';
import { expect } from 'chai';
import * as sinon from 'sinon';

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
            expect(service).to.be.ok;
        });

        it('should call the getVehicles method on the VehiclesRepository once', () => {
            const spy = sinon.spy(vehicleRepository, 'getVehicles');
            service.getVehicles();
            expect(spy.called).to.be.true;
        });
    });
});
