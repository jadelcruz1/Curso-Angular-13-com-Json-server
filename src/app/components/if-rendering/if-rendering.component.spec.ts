import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRenderingComponent } from './if-rendering.component';

describe('IfRenderingComponent', () => {
  let component: IfRenderingComponent;
  let fixture: ComponentFixture<IfRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
