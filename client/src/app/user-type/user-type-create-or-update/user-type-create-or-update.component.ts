import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserType } from '@aptsi-types';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-user-type-create-or-update',
  templateUrl: './user-type-create-or-update.component.html',
  styleUrls: ['./user-type-create-or-update.component.scss']
})

export class UserTypeCreateOrUpdateComponent implements OnInit {
  isCreate = false;
  existingUserTypeId: number = null;
  userType: UserType = null;

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
