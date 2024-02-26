import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RegimeGeneralService } from '../regime-general.service';


@Component({
  selector: 'app-regime-general',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './regime-general.component.html',
  styleUrl: './regime-general.component.css'
})
export class RegimeGeneralComponent implements OnInit {
  constructor(private router : Router, private drgService: RegimeGeneralService) {}

  ngOnInit() {
    
  }
}
