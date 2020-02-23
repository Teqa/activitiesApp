import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  appurl = this.configService.url;
  constructor(
    private configService: ConfigService,
    public router: Router
    ) { }

  ngOnInit() {
  }

goToLogin(){
    this.router.navigate(['/tab-nav/login']);
  }
}
