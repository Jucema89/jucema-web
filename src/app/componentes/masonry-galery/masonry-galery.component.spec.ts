import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGaleryComponent } from './masonry-galery.component';

describe('MasonryGaleryComponent', () => {
  let component: MasonryGaleryComponent;
  let fixture: ComponentFixture<MasonryGaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryGaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
