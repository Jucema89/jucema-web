import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoproyectsComponent } from './twoproyects.component';

describe('TwoproyectsComponent', () => {
  let component: TwoproyectsComponent;
  let fixture: ComponentFixture<TwoproyectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoproyectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoproyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
