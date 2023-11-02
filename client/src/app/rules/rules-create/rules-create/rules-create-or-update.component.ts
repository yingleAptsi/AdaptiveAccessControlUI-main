import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Rule } from '@aptsi-types';
import { RuleService } from '../../rules.service';
@Component({
  selector: 'app-rules-create-or-update',
  templateUrl: './rules-create-or-update.component.html',
  styleUrls: ['./rules-create-or-update.component.scss']
})
export class RulesCreateOrUpdateComponent implements OnInit{

  isCreate = false;
  existingRuleId: number = null;
  rule: Rule = null;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ruleService: RuleService
  ) {}

  async ngOnInit(): Promise<void> {
    this.isCreate = Boolean(this.route.snapshot.data.create);
    this.existingRuleId = +this.route.snapshot.params.ruleId;

    if(!this.isCreate) {
      this.rule = await this.ruleService.getRule(this.existingRuleId).toPromise();
    }

    this.form = this.isCreate ? new FormGroup({
      name: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      ruleId: new FormControl(null, Validators.required),
      stringRepresentation: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    }) : new FormGroup({
      
      name: new FormControl(this.rule.name, Validators.required),
      type: new FormControl(null, Validators.required),
      ruleId: new FormControl(this.rule.ruleId, Validators.required),
      stringRepresentation: new FormControl(null, Validators.required),
      description: new FormControl(this.rule.description, Validators.required),
     
    });
  }

  async submit() {
    if (this.isCreate) {
      await this.ruleService.createRule(
        this.form.value.ruleId,
        this.form.value.name,
        this.form.value.type,
        this.form.value.description,
        this.form.value.stringRepresentation
      ).toPromise();
    } else {
      await this.ruleService.updateRule(
        this.existingRuleId,
        this.form.value.name,
        this.form.value.type,
        this.form.value.description,
        this.form.value.stringRepresentation
      ).toPromise();
    }
    this.router.navigate(['/rules']);
  }
  

  
}