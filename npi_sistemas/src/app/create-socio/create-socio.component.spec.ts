import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSocioComponent } from './create-socio.component';

describe('CreateSocioComponent', () => {
  let component: CreateSocioComponent;
  let fixture: ComponentFixture<CreateSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSocioComponent]
    });
    fixture = TestBed.createComponent(CreateSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
