import { Component, OnInit } from '@angular/core';
import { Asset } from '../../../../../types/src/asset';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '@aptsi-types';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-create-or-update',
  templateUrl: './asset-create-or-update.component.html',
  styleUrls: ['./asset-create-or-update.component.scss']
})
export class AssetCreateOrUpdateComponent implements OnInit {
  isCreate = false;
  existingAssetId: number = null;
  asset: Asset = null;

  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assetService: AssetService
  ) {}

  async ngOnInit(): Promise<void> {
    this.isCreate = Boolean(this.route.snapshot.data.create);
    this.existingAssetId = +this.route.snapshot.params.assetId;

    if(!this.isCreate) {
      this.asset = await this.assetService.getAsset(this.existingAssetId).toPromise();
    }

    this.form = this.isCreate ? new FormGroup({
      assetName: new FormControl(null, Validators.required),
      securityZone: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    }) : new FormGroup({
      assetName: new FormControl(this.asset.name, Validators.required),
      securityZone: new FormControl(null, Validators.required),
      description: new FormControl(this.asset.description, Validators.required),
    });
  }

  async submit() {
    if (this.isCreate) {
      await this.assetService.createAsset(
        this.form.value.rulesetName,
        this.form.value.description,
      ).toPromise();
    } else {
      await this.assetService.updateAsset(
        this.existingAssetId,
        this.form.value.rulesetName,
        this.form.value.description,
      ).toPromise();
    }
    this.router.navigate(['/asset']);
  }
  
}