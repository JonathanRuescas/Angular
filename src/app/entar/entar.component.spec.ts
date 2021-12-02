import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntarComponent } from './entar.component';

describe('EntarComponent', () => {
  let component: EntarComponent;
  let fixture: ComponentFixture<EntarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
