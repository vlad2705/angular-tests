import {LightswitchComponent} from './demo';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('LightswitchComp', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;
  let message: HTMLElement;
  let button: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ]
    });
    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    message = fixture.nativeElement.querySelector('span');
    button = fixture.nativeElement.querySelector('button');
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false, 'off at first');
    component.clicked();
    expect(component.isOn).toBe(true, 'on after click');
    component.clicked();
    expect(component.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    expect(component.message).toMatch('The light is Off', 'off at first');
    component.clicked();
    expect(component.message).toMatch('The light is On', 'on after clicked');
  });

  it('#clicked() should set #message to "is On"', () => {
    fixture.detectChanges();
    expect(message.textContent).toContain('The light is Off', 'off at first');
    button.click();
    fixture.detectChanges();
    expect(message.textContent).toContain('The light is On', 'on after clicked');
  });
});
