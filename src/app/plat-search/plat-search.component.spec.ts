import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatSearchComponent } from './plat-search.component';

describe('PlatSearchComponent', () => {
  let component: PlatSearchComponent;
  let fixture: ComponentFixture<PlatSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
