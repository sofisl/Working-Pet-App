import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-redirect',
  templateUrl: './external-redirect.component.html',
  styleUrls: ['./external-redirect.component.scss']
})
export class ExternalRedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://adoptpetadmin-fkuvy4zymq-uc.a.run.app'
  }

}
