import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  collapedSideBar: any;
  newCountry: any;

  constructor(
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.newCountry = JSON.parse(localStorage.getItem('country') || '{}');
  }

  receiveCollapsed($event: any) {
      this.collapedSideBar = $event;
  }

  onSubmit(form: NgForm) {
    var country = form.value.newCountry;
    localStorage.setItem('country', JSON.stringify(country));
    this.toastr.success('Success', 'You have switched to  '+country);
    location.reload();
  }

}
