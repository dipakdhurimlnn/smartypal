import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMentalComponent } from './page-mental.component';

describe('PageMentalComponent', () => {
  let component: PageMentalComponent;
  let fixture: ComponentFixture<PageMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
