import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteonewsComponent } from './meteonews.component';

describe('MeteonewsComponent', () => {
  let component: MeteonewsComponent;
  let fixture: ComponentFixture<MeteonewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteonewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteonewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
