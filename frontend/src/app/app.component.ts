import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyVote';
  message: string = 'poor';
  isHide: boolean = true;
  isShow: boolean = false;
  isShowAlert: boolean = false;

  constructor(private service: SharedService) {
    this.service.showAlert$.subscribe((msg: string) => {
      this.showMessage(msg);
    });
  }

  showMessage(msg: string): void {
    this.message = msg;
    this.isHide = false;
    this.isShow = true;
    this.isShowAlert = true;

    setTimeout(() => {
      this.isHide = true;
      this.isShow = false;
    }, 3000);
  }
}
