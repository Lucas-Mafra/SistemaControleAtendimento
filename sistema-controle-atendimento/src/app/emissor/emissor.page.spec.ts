import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissorPage } from './emissor.page';

describe('EmissorPage', () => {
  let component: EmissorPage;
  let fixture: ComponentFixture<EmissorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmissorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
