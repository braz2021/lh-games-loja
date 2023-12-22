import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent {
  private _loginService: any;

  constructor(private router: Router,
    private_loginService: LoginService){}
    logout(){
      localStorage.clear();
      this._loginService.setMostraMenu(true);
      this.router.navigate(['/login']);
    }

}
