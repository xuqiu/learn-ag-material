import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupuiComponent } from './soupui.component';

describe('SoupuiComponent', () => {
  let component: SoupuiComponent;
  let fixture: ComponentFixture<SoupuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
