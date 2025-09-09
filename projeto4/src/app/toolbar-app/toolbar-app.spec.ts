import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarApp } from './toolbar-app';

describe('ToolbarApp', () => {
  let component: ToolbarApp;
  let fixture: ComponentFixture<ToolbarApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
