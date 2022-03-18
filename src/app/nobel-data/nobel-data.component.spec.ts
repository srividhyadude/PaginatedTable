import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobelDataComponent } from './nobel-data.component';

describe('NobelDataComponent', () => {
  let component: NobelDataComponent;
  let fixture: ComponentFixture<NobelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobelDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NobelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
