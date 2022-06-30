import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { Status } from '../model/status';
import { PetService } from './pet.service';

describe('Service: PetService', () => {
  let httpTestingController: HttpTestingController;
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PetService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PetService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of pets when get is called', () => {

    const petsResponse = [
      {
        id: 1,
        name: 'Bobby',
        status: Status.AVAILABLE,
      },
      {
        id: 2,
        name: 'Lamp',
        status: Status.SOLD,
      },
    ];

    service.getPets().subscribe(pets => {
      expect(pets).toEqual(petsResponse);
    });

    httpTestingController.expectOne(environment.apiUrl + 'pet').flush(petsResponse);

  });

});
