import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private auth: HardcodedAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }



  }
}
