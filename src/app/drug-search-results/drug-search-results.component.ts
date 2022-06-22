import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-drug-search-results',
  templateUrl: './drug-search-results.component.html',
  styleUrls: ['./drug-search-results.component.scss']
})
export class DrugSearchResultsComponent implements OnInit {

  loading: any;

  searchText: any;
  page = 1;
  pageSize = 15;

  userResults = [];

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
  ) {

  }

  ngOnInit(): void {
    this.getResults();
  }


  getResults() {
    this.loading = true;
    this.apiService.GetData('/drugsearch/results/').subscribe(data => {
      this.loading = false;
      console.log('all added results', data);
      this.userResults = data;
    },
      (err: any) => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }


}
