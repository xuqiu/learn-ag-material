import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsCallComponent } from './ws-call.component';

describe('WsCallComponent', () => {
  let component: WsCallComponent;
  let fixture: ComponentFixture<WsCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
