import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocioComponent } from './update-socio.component';

describe('UpdateSocioComponent', () => {
  let component: UpdateSocioComponent;
  let fixture: ComponentFixture<UpdateSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSocioComponent]
    });
    fixture = TestBed.createComponent(UpdateSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
