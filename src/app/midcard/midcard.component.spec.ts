import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidcardComponent } from './midcard.component';

describe('MidcardComponent', () => {
  let component: MidcardComponent;
  let fixture: ComponentFixture<MidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
