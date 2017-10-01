import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesService } from './vehicles.service';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-string'));

@Injectable()
class MockVehiclesService {
    public vehicles = [{
        id: 'xe',
        modelYear: 'k17',
        url: '/api/vehicle/xe',
        media: [
            {
                name: 'vehicle',
                url: '/images/xe_k17.jpg'
            }
        ],
        price: '£30,000',
        description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
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
    }, {
        id: 'xf',
        modelYear: 'k17',
        url: '/api/vehicle/xf',
        media: [
            {
                name: 'vehicle',
                url: '/images/xf_k17.jpg'
            }
        ],
        price: '£36,000',
        description: 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
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
    }];

    public getVehicles(): any {
        return Observable.of(this.vehicles);
    }
}

describe('VehiclesComponent', () => {
    let fixture: any;
    let compiled: any;
    let app: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                VehiclesComponent
            ],
            providers: [
                {provide: VehiclesService, useClass: MockVehiclesService}
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(VehiclesComponent);

        app = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(app).to.be.ok;
    });

    it('should have a vehicles array', () => {
        expect(app.vehicles).to.be.an.instanceof(Array);
    });

    it('should render two vehicle containers', () => {
        expect(compiled.querySelectorAll('.vehicle').length).to.equal(2);
    });

    it(`should render the correct path for the first vehicle's image`, () => {
        const imageSrc = compiled.querySelector('.vehicle__image').getAttribute('src');
        expect(imageSrc).to.equalIgnoreCase('assets/images/xe_k17.jpg');
    });

    it(`should render the first vehicle's title as 'XE'`, () => {
        const name = compiled.querySelector('.vehicle-details__name').innerHTML;
        expect(name).to.equalIgnoreCase('XE');
    });

    it(`should render the first vehicle's price as 'From £30,000'`, () => {
        const price = compiled.querySelector('.vehicle-details__price').innerHTML;
        expect(price).to.equalIgnoreCase('From £30,000');
    });

    it(`should render the first vehicle's description correctly'`, () => {
        const description = compiled.querySelector('.vehicle-details__description').innerHTML;
        expect(description).to.equalIgnoreCase('The most advanced, efficient and refined sports saloon that Jaguar has ever produced');
    });
});



