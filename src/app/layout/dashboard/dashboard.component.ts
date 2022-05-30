import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dashboardComp = [
    {
      image: 'assets/images/dashboard/trophy.png',
      title: 'Monthly Votes',
      link: '/monthly-votes',
      paragragh: 'vote for player & coach'
    },
    {
      image: 'assets/images/dashboard/medal.png',
      title: 'Annual Votes',
      link: '/annual-votes',
      paragragh: 'vote for player & coach'
    }, 
    {
      image: 'assets/images/dashboard/trophy (7).png',
      title: 'Exclusions',
      link: '/exclusions',
      paragragh: 'Exclusions'
    },
    {
      image: 'assets/images/dashboard/trophy (9).png',
      title: 'Rerun',
      link: '/rerun',
      paragragh: 'Rerun'
    }, 
  ]

}
