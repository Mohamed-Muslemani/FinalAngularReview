import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySitterComponentComponent } from './modify-sitter-component.component';

describe('ModifySitterComponentComponent', () => {
  let component: ModifySitterComponentComponent;
  let fixture: ComponentFixture<ModifySitterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifySitterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifySitterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
