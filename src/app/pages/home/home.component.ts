import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  title = 'Kit Collective';

  today = new Date(); 
  day = this.today.getDay();
  msg = "";
  
  ngOnInit() {
    if (this.day == 0) {
        this.msg = "Have a Soft & Snuggly Sunday !"; 
    }
    else if (this.day == 1) { 
      this.msg = "Have a Marvelously Made Monday!"; 
    }
    else if (this.day == 2) { 
      this.msg = "Have a Tangle-Free Tuesday!"; 
    }
    else if (this.day == 3) { 
      this.msg = "Have a Whimsy & Wonderful Wednesday!"; 
    }
    else if (this.day == 4) { 
      this.msg = "Have a Threaded Thursday!"; 
    }
    else if (this.day == 5) { 
      this.msg = "Have a Fluffy & Fun Friday!"; 
    }
    else if (this.day == 6) { 
      this.msg = "Have a Snug & Cozy Saturday!"; 
    }
  }
}
