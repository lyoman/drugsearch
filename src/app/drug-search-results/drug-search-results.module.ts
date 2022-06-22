import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugSearchResultsRoutingModule } from './drug-search-results-routing.module';
import { DrugSearchResultsComponent } from './drug-search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DrugSearchResultsComponent
  ],
  imports: [
    CommonModule,
    DrugSearchResultsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class DrugSearchResultsModule { }
