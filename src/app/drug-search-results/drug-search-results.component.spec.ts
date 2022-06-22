import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugSearchResultsComponent } from './drug-search-results.component';

describe('DrugSearchResultsComponent', () => {
  let component: DrugSearchResultsComponent;
  let fixture: ComponentFixture<DrugSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
