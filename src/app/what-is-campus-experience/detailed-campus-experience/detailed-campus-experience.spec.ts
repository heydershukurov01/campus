import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCampusExperience } from './detailed-campus-experience';

describe('DetailedCampusExperience', () => {
  let component: DetailedCampusExperience;
  let fixture: ComponentFixture<DetailedCampusExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedCampusExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedCampusExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
