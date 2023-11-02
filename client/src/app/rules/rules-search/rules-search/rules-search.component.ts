import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Header, Rule } from '@aptsi-types';
import { RuleService } from '../../rules.service';

@Component({
  selector: 'app-rules-search',
  templateUrl: './rules-search.component.html',
  styleUrls: ['./rules-search.component.scss']
})
export class RulesSearchComponent {
  headers: Header[] = [
    {
      name: 'Rule Id',
      property: 'ruleId',
      showInDropdown: true,
    }, {
      name: 'Rule Name',
      property: 'name',
      showInDropdown: true,
    }, {
      name: 'Description',
      property: 'description',
    },
  ];
  searchText: string = '';
  filterName: string = null;
  results: any[] = [];
  rules: Rule[] = [];

  constructor(private router: Router, private ruleService: RuleService) {}

  async ngOnInit(): Promise<void> {
    this.rules = await this.ruleService.getRules().toPromise();
  }

  async searchRules() {
    this.rules = await this.ruleService.getRules(this.searchText, this.filterName).toPromise();
  }

  async deleteRule(index: number) {
    await this.ruleService.deleteRule(this.rules[index].ruleId).toPromise();
    this.rules = await this.ruleService.getRules().toPromise();
  }

  async updateRule(index: number) {
    this.router.navigate(['/rules/update', this.rules[index].ruleId]);
  }

  back() {
    this.router.navigate(['/risk-score-authoring']);
  }
}