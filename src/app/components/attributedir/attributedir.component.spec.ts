import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributedirComponent } from './attributedir.component';

describe('AttributedirComponent', () => {
  let component: AttributedirComponent;
  let fixture: ComponentFixture<AttributedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributedirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
