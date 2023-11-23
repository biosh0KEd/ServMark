import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface OnExit {
  onExit: () => Observable<boolean> | Promise<boolean> | boolean;
}


export const exitGuard: CanDeactivateFn<OnExit> = (component: OnExit, currentRoute, currentState, nextState) => {
  console.log(component, currentRoute, currentState, nextState);
  return component.onExit ? component.onExit() : true;
};
