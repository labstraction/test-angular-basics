import { Component } from '@angular/core';
import { HeaderComponent } from "../../header-component/header-component";
import { FooterComponent } from "../../footer-component/footer-component";

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}
