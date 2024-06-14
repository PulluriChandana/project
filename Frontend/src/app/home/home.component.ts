import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
/*export class HomeComponent {
  ngOnInit(): void {
  }
}*/
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToComponent(route: string) {
    this.router.navigateByUrl(route);
  }

}