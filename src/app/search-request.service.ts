import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { StringifyOptions } from 'querystring';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
  repository!: Repository;
  users!: User;
  newRepository: any;
  searchRepo: any;

  constructor(private http:HttpClient) {
    this.repository = new Repository(' ',' ', ' ',new Date());
    this.users = new User(' ', ' ', ' ', 0, ' ', new Date(), 0,0);
   }

   githubUser(searchName:any){
     interface ApiResponse{
       name: String;
       html_url:string;
       description:string;
       created_at: Date;
       login: string;
       public_repos: number;
       followers:number;
       following:number;
       avatar_url:string;
     }
     const promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.myApi).toPromise().then((response: any)=>{
         this.users.name = response.name;
         this.users.html_url = response.html_url;
         this.users.login = response.login;
         this.users.avatar_url = response.avatar_url;
         this.users.public_repos = response.public_repos;
         this.users.created_at = response.created_at;
         this.users.followers = response.followers;
         this.users.following = response.following;
         resolve(response);
       },);
     });
     return promise;
   }

  gitUserRepos(searchMe:any){
    interface ApiResponse{
      name: string;
      description:string;
      created_at:Date;
    }
    let myPromise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token' + environment.myApi).toPromise().then((getResponse:any)=>{
        this.newRepository=getResponse;
        resolve(getResponse);
      },error =>{
        reject(error);
      });
    });
    return myPromise;
  }

  gitRepos(searchName:any){
    interface ApiResponse{
      items:any;
    }
    const promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName+ '&per_page=10' + environment.myApi).toPromise().then((getReporesponse:any)=>{
        this.searchRepo = getReporesponse.items;
        resolve(getReporesponse);
      },error=>{
        this.searchRepo ='error';
        reject(error);
      });
    });
    return promise;
  }

}
