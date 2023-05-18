import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentelistComponent } from './dependentelist.component';

describe('DependentelistComponent', () => {
  let component: DependentelistComponent;
  let fixture: ComponentFixture<DependentelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependentelistComponent]
    });
    fixture = TestBed.createComponent(DependentelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
