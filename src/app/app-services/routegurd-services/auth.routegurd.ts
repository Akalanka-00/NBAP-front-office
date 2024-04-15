import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { UserModel } from '../../app-constants/interface/user.interface';
import { SessionStorageKeys } from '../../app-constants/enum/storageKeys.enum';

@Injectable()
export class AuthActivateRouteGuard implements CanActivate {
    user! : UserModel;
    
    constructor(private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(sessionStorage.getItem(SessionStorageKeys.CREDENTIALS)){
            this.user = JSON.parse(sessionStorage.getItem(SessionStorageKeys.CREDENTIALS)!);
        }
        if(!this.user){
            this.router.navigate(['login']);
        }
        return this.user?true:false;
    }

}