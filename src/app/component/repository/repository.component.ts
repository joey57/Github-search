import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/repository';
import { SearchRequestService } from 'src/app/search-request.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  providers: [SearchRequestService]
})
export class RepositoryComponent implements OnInit {

  repository!: Repository;
  public searchRepo!: String;
  public resultCount = 12;

  searchRepos(repository:any){
    this.searchRepo = '';
    this.resultCount = 10;
    this.getDataFunction();
  }

  constructor(public gitRepoRequest:SearchRequestService) { }

  ngOnInit() {
    this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);
  }

  getDataFunction(){
    this.gitRepoRequest.gitRepos(this.searchRepo);
  }

}
