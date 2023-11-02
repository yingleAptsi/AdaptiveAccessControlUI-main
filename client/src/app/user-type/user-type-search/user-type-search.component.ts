
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Header, UserType } from '@aptsi-types';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-user-type-search',
  templateUrl: './user-type-search.component.html',
  styleUrls: ['./user-type-search.component.scss']
})
export class UserTypeSearchComponent implements OnInit {
  isCreate = false;
  existingUserTypeId: number = null;
  userType: UserType = null;

  headers: Header[] = [
    {
      name: 'User Type ID',
      property: 'nodeRuleId',
    },
    {
      name: 'User Type Name',
      property: 'ruleId',
    },
    {
      name: 'User Type Description',
      property: 'ruleId2',
    },
   
  ];

  userTypeRules: any[] = [
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
    private userTypeService: UserTypeService
  ) {}

  async ngOnInit(): Promise<void> {
    this.isCreate = Boolean(this.route.snapshot.data.create);
    this.existingUserTypeId = +this.route.snapshot.params.userTypeId;

    if (!this.isCreate) {
      this.userType = await this.userTypeService.getUserType(this.existingUserTypeId).toPromise();
    }

    this.form = this.isCreate
      ? new FormGroup({
          userTypeName: new FormControl(null, Validators.required),
          securityZone: new FormControl(null, Validators.required),
          description: new FormControl(null, Validators.required),
        })
      : new FormGroup({
          userTypeName: new FormControl(this.userType.name, Validators.required),
          securityZone: new FormControl(null, Validators.required),
          description: new FormControl(this.userType.description, Validators.required),
        });
  }

  async submit() {
    if (this.isCreate) {
      await this.userTypeService.createUserType(
        this.form.value.userTypeName,
        this.form.value.description
      ).toPromise();
    } else {
      await this.userTypeService.updateUserType(
        this.existingUserTypeId,
        this.form.value.userTypeName,
        this.form.value.description
      ).toPromise();
    }
    this.router.navigate(['/user-types']);
  }
}