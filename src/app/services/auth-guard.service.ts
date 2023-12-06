import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

    constructor(private _authService: AuthService, private _router: Router) {}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this._authService.getToken()) {
        return true;
      }
  
      this._router.navigate(['/login']);
      return false;
    }
}
