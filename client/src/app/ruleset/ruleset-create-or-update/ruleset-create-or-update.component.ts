import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Header, Ruleset } from '@aptsi-types';
import { RulesetService } from '../ruleset.service';

@Component({
  selector: 'app-ruleset-create-or-update',
  templateUrl: './ruleset-create-or-update.component.html',
  styleUrls: ['./ruleset-create-or-update.component.scss']
})
export class RulesetCreateOrUpdateComponent implements OnInit {
  isCreate = false;
  existingRulesetId: number = null;
  ruleset: Ruleset = null;

  headers: Header[] = [
    {
      name: 'Node Rule Id',
      property: 'nodeRuleId',
    }, {
      name: 'Rule Id',
      property: 'ruleId',
    }, {
      name: 'Rule Id',
      property: 'ruleId2',
    }, {
      name: 'Rule Id',
      property: 'ruleId3',
    },
  ];

  rulesetRules: any[] = [
    {
      nodeRuleId: 0,
      ruleId: 1,
      ruleId2: 2,
      ruleId3: 3,
    },
    {
      nodeRuleId: 1,
      ruleId: 2,
      ruleId2: 3,
      ruleId3: 4,
    },
    {
      nodeRuleId: 2,
      ruleId: 3,
      ruleId2: 4,
      ruleId3: 5,
    },
  ];

  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rulesetService: RulesetService
  ) {}

  async ngOnInit(): Promise<void> {
    this.isCreate = Boolean(this.route.snapshot.data.create);
    this.existingRulesetId = +this.route.snapshot.params.rulesetId;

    if(!this.isCreate) {
      this.ruleset = await this.rulesetService.getRuleset(this.existingRulesetId).toPromise();
    }

    this.form = this.isCreate ? new FormGroup({
      rulesetName: new FormControl(null, Validators.required),
      securityZone: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    }) : new FormGroup({
      rulesetName: new FormControl(this.ruleset.name, Validators.required),
      securityZone: new FormControl(null, Validators.required),
      description: new FormControl(this.ruleset.description, Validators.required),
    });
  }

  async submit() {
    if (this.isCreate) {
      await this.rulesetService.createRuleset(
        this.form.value.rulesetName,
        this.form.value.description,
      ).toPromise();
    } else {
      await this.rulesetService.updateRuleset(
        this.existingRulesetId,
        this.form.value.rulesetName,
        this.form.value.description,
      ).toPromise();
    }
    this.router.navigate(['/ruleset/search']);
  }
  
}
