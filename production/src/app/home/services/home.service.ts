import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { TopMenu } from 'src/app/shared/components';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {

    };
    getTumens() {
        // http://mock.studyinghome.com/
        //http://mock.studyinghome.com/mock/5e6734841328351ac71c20e1/ng/query
        return this.http.get<TopMenu[]>(`${environment.bacsUrl}/query`, {
            params: { query: 'no' }
        })
    }
}