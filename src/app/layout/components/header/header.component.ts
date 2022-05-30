import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pushRightClass: any;
    public firstName: any;
    public lastName: any;
    public user: any;

    username = JSON.parse(localStorage.getItem("unique_name") || '{}');

    constructor(
      public router: Router,
      private toastr: ToastrService,
      ) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        if(localStorage.getItem('token') == null){
            this.router.navigateByUrl('/login');
        }
        this.pushRightClass = 'push-right';
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
        console.log("this.user", this.user);
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body') as HTMLBodyElement;
        // if (dom) {
        //   dom.innerHTML = 'Type here is HTMLElement, not null';
        // }
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }

}
