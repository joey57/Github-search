import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SearchRequestService } from 'src/app/search-request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchName!:string;

  @Output() searchOutput = new EventEmitter<any>();

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName= "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
