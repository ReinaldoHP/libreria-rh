import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRhComponent } from './input-rh.component';

describe('InputRhComponent', () => {
  let component: InputRhComponent;
  let fixture: ComponentFixture<InputRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
