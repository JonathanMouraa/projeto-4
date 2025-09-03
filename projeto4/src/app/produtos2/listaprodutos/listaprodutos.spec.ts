import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaprodutos } from './listaprodutos';

describe('Listaprodutos', () => {
  let component: Listaprodutos;
  let fixture: ComponentFixture<Listaprodutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listaprodutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listaprodutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
