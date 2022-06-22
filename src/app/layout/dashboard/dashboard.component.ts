import { Component, OnInit } from '@angular/core';
// import { ChartDatasetProperties, Color, ChartOptions, TooltipLabelStyle } from 'chart.js';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      { label: 'Malaria', data: [100, 120, 105, 200, 50, 35], tension: 0.5 },
      { label: 'Typhoid', data: [200, 10, 40, 50, 90, 10], tension: 0.5 },
      { label: 'Diabetes', data: [50, 40, 35, 45, 65, 120], tension: 0.5 },
      { label: 'Fungal infection', data: [120, 150, 102, 160, 90, 90], tension: 0.5 },
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Diseases Cases',
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  dashboardComp = [
    {
      image: 'assets/images/dashboard/trophy.png',
      title: 'Daily Report',
      link: '/monthly-votes',
      paragragh: 'the number of diseases today'
    },
    {
      image: 'assets/images/dashboard/medal.png',
      title: 'Weekly Report',
      link: '/annual-votes',
      paragragh: 'weekly number of new cases'
    },
    {
      image: 'assets/images/dashboard/trophy (7).png',
      title: 'Monthly Report',
      link: '/exclusions',
      paragragh: 'weekly number of new cases'
    },
    {
      image: 'assets/images/dashboard/trophy (9).png',
      title: 'Annual Report',
      link: '/rerun',
      paragragh: 'yearly number of new cases'
    },
  ]

}
