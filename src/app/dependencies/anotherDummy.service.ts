import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnotherDummyService {

    public lovelyMethod(): any {
        return { text: 'lovely!' };
    }
}