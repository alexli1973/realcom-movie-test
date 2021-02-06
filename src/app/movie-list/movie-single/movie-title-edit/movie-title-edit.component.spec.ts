import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTitleEditComponent } from './movie-title-edit.component';

describe('MovieTitleEditComponent', () => {
  let component: MovieTitleEditComponent;
  let fixture: ComponentFixture<MovieTitleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTitleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTitleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
