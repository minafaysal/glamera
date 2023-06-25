import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSuccessCreationComponent } from './account-success-creation.component';

describe('AccountSuccessCreationComponent', () => {
  let component: AccountSuccessCreationComponent;
  let fixture: ComponentFixture<AccountSuccessCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSuccessCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSuccessCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
