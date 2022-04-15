import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from 'src/app/search-request.service';
import { User } from 'src/app/user';
import { Repository } from 'src/app/repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [SearchRequestService]
})
export class UserComponent implements OnInit {
  public searchMe = 'joey57';
  public githubUser = '';

  users!: User;
  repository!: Repository;
  public searchRepo!: string;
  public resultCount =12;

  findUser(username:any){
    this.githubUser ='';
    this.searchMe = username;
    this.ngOnInit();
  }

  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
  }

  searchRepos(){
    this.searchRepo ='';
    this.resultCount = 10;
  }

}
