import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { EntreesSortiesService } from '../entrees-sorties.service';
// import { EntreesSorties } from '../entrees-sorties';

@Component({
  selector: 'app-entrees-sorties',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './entrees-sorties.component.html',
  styleUrl: './entrees-sorties.component.css'
})
export class EntreesSortiesComponent {
  // // entreesSorties!: EntreesSorties;
  // constructor(private entreesSortiesService: EntreesSortiesService, private router : Router) {}

  // ngOnInit(): void {
  //   this.entreesSortiesService.getAllEntreesSorties().subscribe((data) => {
  //     // this.entreesSorties = data;
  //   });
  // }
}
