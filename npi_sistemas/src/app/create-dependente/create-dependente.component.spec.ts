import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDependenteComponent } from './create-dependente.component';

describe('CreateDependenteComponent', () => {
  let component: CreateDependenteComponent;
  let fixture: ComponentFixture<CreateDependenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDependenteComponent]
    });
    fixture = TestBed.createComponent(CreateDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
