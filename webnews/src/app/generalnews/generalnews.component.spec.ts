import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralnewsComponent } from './generalnews.component';

describe('GeneralnewsComponent', () => {
  let component: GeneralnewsComponent;
  let fixture: ComponentFixture<GeneralnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
