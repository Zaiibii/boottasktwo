import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageOverviewComponent } from './main-page-overview.component';

describe('MainPageOverviewComponent', () => {
  let component: MainPageOverviewComponent;
  let fixture: ComponentFixture<MainPageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
