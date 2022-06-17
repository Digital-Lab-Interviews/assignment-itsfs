import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAddComponent } from './pet-add.component';
import { AppModule } from 'src/app/app.module';

describe('Component: PetAddComponent', () => {
  let component: PetAddComponent;
  let fixture: ComponentFixture<PetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
