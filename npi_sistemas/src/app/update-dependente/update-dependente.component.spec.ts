import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDependenteComponent } from './update-dependente.component';

describe('UpdateDependenteComponent', () => {
  let component: UpdateDependenteComponent;
  let fixture: ComponentFixture<UpdateDependenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDependenteComponent]
    });
    fixture = TestBed.createComponent(UpdateDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
