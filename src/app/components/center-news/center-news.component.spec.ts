import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterNewsComponent } from './center-news.component';

describe('CenterNewsComponent', () => {
  let component: CenterNewsComponent;
  let fixture: ComponentFixture<CenterNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
