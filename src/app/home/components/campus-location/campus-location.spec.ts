import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusLocation } from './campus-location';

describe('CampusLocation', () => {
  let component: CampusLocation;
  let fixture: ComponentFixture<CampusLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
