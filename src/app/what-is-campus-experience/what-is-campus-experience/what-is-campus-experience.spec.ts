import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCampusExperience } from './what-is-campus-experience';

describe('WhatIsCampusExperience', () => {
  let component: WhatIsCampusExperience;
  let fixture: ComponentFixture<WhatIsCampusExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatIsCampusExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsCampusExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
