import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DummyService {
    
    public awesomeMethod():string {
        return 'awesome!';
    }
}