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

  // lineChartData: ChartDatasetProperties[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  // ];
  // lineChartLabels: TooltipLabelStyle[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  // lineChartOptions = {
  //   responsive: true,
  // };
  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];
  // lineChartLegend = true;
  // lineChartPlugins = [];
  // lineChartType = 'line';

  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
      { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
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
