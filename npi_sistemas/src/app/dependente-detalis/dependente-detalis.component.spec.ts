import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenteDetalisComponent } from './dependente-detalis.component';

describe('DependenteDetalisComponent', () => {
  let component: DependenteDetalisComponent;
  let fixture: ComponentFixture<DependenteDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependenteDetalisComponent]
    });
    fixture = TestBed.createComponent(DependenteDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
