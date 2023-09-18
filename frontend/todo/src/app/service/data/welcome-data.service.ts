import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');

  }

  //http://localhost:8080/hello-world/path-variable/stef
  executeHelloWorldServiceWithPathVariable(name: any) {
    let basicAuthHeaderString = this.createBasicAuthHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    }
    )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers : header});

  }

  createBasicAuthHttpHeader() {
    let username = 'stef'
    let password = 'abc'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }
}
