import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOfInner } from './title-of-inner';

describe('TitleOfInner', () => {
  let component: TitleOfInner;
  let fixture: ComponentFixture<TitleOfInner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleOfInner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleOfInner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
