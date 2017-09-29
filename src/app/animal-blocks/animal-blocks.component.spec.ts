import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBlocksComponent } from './animal-blocks.component';

describe('AnimalBlocksComponent', () => {
  let component: AnimalBlocksComponent;
  let fixture: ComponentFixture<AnimalBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
