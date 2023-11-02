import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-risk-score-authoring',
  templateUrl: './risk-score-authoring.component.html',
  styleUrls: ['./risk-score-authoring.component.scss']
})
export class RiskScoreAuthoringComponent implements OnInit {

  public pages: Array<string>=['Ruleset', 'Rules'];
   
  public selectedPage: string = null;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  go() {
      if (this.selectedPage === 'Ruleset') {
        this.router.navigate(['/ruleset/search']);
      } else if (this.selectedPage === 'Rules') {
        this.router.navigate(['/rules/search']);
      }
  }

  public resetPage(){
    this.selectedPage = null;
  }

}
