// ANGULAR IMPORTS
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

// CUSTOM SERVICES IMPORT
import { UserService } from "./user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    if (this.userService.user.userName) {
      return true;
    }
    
    this.router.navigate(['/']);
  }
}