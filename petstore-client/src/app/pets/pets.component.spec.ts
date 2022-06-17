import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PetsComponent } from './pets.component';
import { AppModule } from 'src/app/app.module';

describe('Component: PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
