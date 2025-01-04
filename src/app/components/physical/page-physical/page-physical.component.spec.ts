import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePhysicalComponent } from './page-physical.component';

describe('PagePhysicalComponent', () => {
  let component: PagePhysicalComponent;
  let fixture: ComponentFixture<PagePhysicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePhysicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
