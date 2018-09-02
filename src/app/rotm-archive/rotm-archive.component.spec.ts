import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotmArchiveComponent } from './rotm-archive.component';

describe('RotmArchiveComponent', () => {
  let component: RotmArchiveComponent;
  let fixture: ComponentFixture<RotmArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotmArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotmArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
