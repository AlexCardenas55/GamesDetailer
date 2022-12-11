import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDropdownComponent } from './platform-dropdown.component';

describe('PlatformDropdownComponent', () => {
  let component: PlatformDropdownComponent;
  let fixture: ComponentFixture<PlatformDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
