import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTemplateComponent } from './search-template.component';

describe('SearchTemplateComponent', () => {
  let component: SearchTemplateComponent;
  let fixture: ComponentFixture<SearchTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
