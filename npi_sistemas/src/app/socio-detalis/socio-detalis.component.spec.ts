import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioDetalisComponent } from './socio-detalis.component';

describe('SocioDetalisComponent', () => {
  let component: SocioDetalisComponent;
  let fixture: ComponentFixture<SocioDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioDetalisComponent]
    });
    fixture = TestBed.createComponent(SocioDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
