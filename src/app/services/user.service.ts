import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;
  private username: string;
  private _Url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {this.username = 'JamesMusembi';}

  ngOnInit() {
    // GET request with response type <any>
    this.http.get<any>('https://api.github.com/users').subscribe((data) => {
      this.username = data.total;
      
    });
  }
  //get profile info
  getUserInfo() {
    return this.http.get('https://api.github.com/users/' + this.username); }
  //get repo information
  getUserRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.username + '/repos'
    );  }

  getProfiles() {
    return this.http.get<any[]>(this._Url);  }

  getProfileInfo(){  
    return this.http.get('https://api.github.com/users/'+this.username+'?acess_token='+environment.APIKEY);    }   
  
  getRepos(user: any){
    let userrepo = 
    this.http.get('https://api.github.com/users/'+this.username+'/repos?acess_token='+environment.APIKEY); 
    console.log(userrepo)
    return userrepo    
  }
  updateProfile(username:string){
    this.username = username;
  }
}
