import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowayeAnasIbneMalekRaComponent } from './dowaye-anas-ibne-malek-ra.component';

describe('DowayeAnasIbneMalekRaComponent', () => {
  let component: DowayeAnasIbneMalekRaComponent;
  let fixture: ComponentFixture<DowayeAnasIbneMalekRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowayeAnasIbneMalekRaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DowayeAnasIbneMalekRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
