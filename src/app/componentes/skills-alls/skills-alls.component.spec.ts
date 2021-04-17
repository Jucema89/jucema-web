import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAllsComponent } from './skills-alls.component';

describe('SkillsAllsComponent', () => {
  let component: SkillsAllsComponent;
  let fixture: ComponentFixture<SkillsAllsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsAllsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
