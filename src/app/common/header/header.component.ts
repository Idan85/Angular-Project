import { Component, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './../../auth/shared/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })

  export class HeaderComponent {

    constructor ( public auth: AuthService,
                  private router: Router ) {}

    logout () {

      this.auth.logout();

      this.router.navigate ([ '/login' ]);
    }

    @Output() featureSelected = new EventEmitter<string>();

    onSelect (feature: string) {

      this.featureSelected.emit(feature);
    }

  }


