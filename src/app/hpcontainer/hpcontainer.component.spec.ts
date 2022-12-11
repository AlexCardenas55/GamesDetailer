import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpcontainerComponent } from './hpcontainer.component';

describe('HpcontainerComponent', () => {
  let component: HpcontainerComponent;
  let fixture: ComponentFixture<HpcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
