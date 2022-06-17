import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from 'src/app/app.module';

describe('Component: AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to RBC Pet Store!');
  }));

  it('should render title in a h2 tag', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome to RBC Pet Store!');
  }));
});
