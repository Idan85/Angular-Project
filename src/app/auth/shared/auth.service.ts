import { Injectable } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable ()

export class AuthService {
    config: any;

    constructor (private http: HttpClient) {}



    public register(userData: any): Observable<any> {
// tslint:disable-next-line:no-debugger
debugger;

    return this.http.post('/api/v1/users/register', userData );

    }
}


