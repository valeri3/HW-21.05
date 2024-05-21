import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthrizationComponent } from './authrization.component';

describe('AuthrizationComponent', () => {
  let component: AuthrizationComponent;
  let fixture: ComponentFixture<AuthrizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthrizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthrizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
