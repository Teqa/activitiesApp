import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { User } from '../../models/user';
import _ from "underscore";

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.page.html',
  styleUrls: ['./tabnav.page.scss'],
})
export class TabnavPage implements OnInit {

  public user: User;
  public loggedin = false;
  
  constructor(
    private auth: AuthenticationService,
    public router: Router,
    public menu: MenuController
    ) { }

  ngOnInit() {
      this.auth.currentUserSubject.subscribe((data) => {
          if (_.isNull(data)) { 
            this.loggedin = false;
            this.menu.enable(true, 'loggedout');
          }
          else { 
            this.loggedin = true;
            this.user = data; 
            this.menu.enable(true, 'loggedin');
            }
        });
  }
}
