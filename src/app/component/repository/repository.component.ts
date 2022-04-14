import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository!: Repository;
  // public searchRepo: string;
  public resultCount = 12;

  searchRepos(){
    // this.searchRepo = '';
    // this.resultCount = 10;
    // this.getDataFunction();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
