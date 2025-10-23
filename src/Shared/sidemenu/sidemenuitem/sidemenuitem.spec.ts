import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidemenuitem } from './sidemenuitem';

describe('Sidemenuitem', () => {
  let component: Sidemenuitem;
  let fixture: ComponentFixture<Sidemenuitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidemenuitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidemenuitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
