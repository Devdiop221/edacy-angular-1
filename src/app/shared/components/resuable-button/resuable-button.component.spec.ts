import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableButtonsComponent } from './resuable-button.component';

describe('ResuableButtonComponent', () => {
  let component: ResuableButtonsComponent;
  let fixture: ComponentFixture<ResuableButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResuableButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
