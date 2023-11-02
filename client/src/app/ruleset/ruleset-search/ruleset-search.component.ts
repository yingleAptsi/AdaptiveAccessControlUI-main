import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header, Ruleset } from '@aptsi-types';
import { RulesetService } from '../ruleset.service';

@Component({
  selector: 'app-ruleset-search',
  templateUrl: './ruleset-search.component.html',
  styleUrls: ['./ruleset-search.component.scss']
})
export class RulesetSearchComponent implements OnInit {

  headers: Header[] = [
    {
      name: 'Ruleset Id',
      property: 'rulesetId',
      showInDropdown: true,
    }, {
      name: 'Ruleset Name',
      property: 'name',
      showInDropdown: true,
    }, {
      name: 'Description',
      property: 'description',
    },
  ];
  searchText: string = '';
  filterName: string = null;
  
  rulesets: Ruleset[] = [];
 
  constructor(
    private router: Router,
    private rulesetService: RulesetService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.rulesets = await this.rulesetService.getRulesets().toPromise();
  }

  async searchRulesets() {
    this.rulesets = await this.rulesetService.getRulesets(
      this.searchText,
      this.filterName,
    ).toPromise();
  }

  async updateRuleset(index: number) {
    this.router.navigate(['/ruleset/update', this.rulesets[index].rulesetId]);
  }
 
  async deleteRuleset(index: number) {
    await this.rulesetService.deleteRuleset(this.rulesets[index].rulesetId).toPromise();
    this.rulesets = await this.rulesetService.getRulesets().toPromise();
  }
 
  back(){
    this.router.navigate(['/risk-score-authoring']);
  }

}
