import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupsComponent } from './list-groups.component';

describe('ListGroupsComponent', () => {
  let component: ListGroupsComponent;
  let fixture: ComponentFixture<ListGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGroupsComponent]
    });
    fixture = TestBed.createComponent(ListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
