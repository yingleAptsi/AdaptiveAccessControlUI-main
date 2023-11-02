import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset, Header } from '@aptsi-types';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-search',
  templateUrl: './asset-search.component.html',
  styleUrls: ['./asset-search.component.scss']
})
export class AssetSearchComponent implements OnInit {
  headers: Header[] = [
    {
      name: 'Asset Id',
      property: 'assetId',
      showInDropdown: true,
    }, {
      name: 'Asset Name',
      property: 'name',
      showInDropdown: true,
    }, {
      name: 'Description',
      property: 'description',
    },
  ];
  searchText: string = '';
  filterName: string = null;
  
  assets: Asset[] = [];
 
  constructor(
    private router: Router,
    private assetService: AssetService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.assets = await this.assetService.getAssets().toPromise();
  }

  async searchAssets() {
    this.assets = await this.assetService.getAssets(this.searchText).toPromise();
  }

  async updateAsset(index: number) {
    this.router.navigate(['/asset/update', this.assets[index].assetId]);
  }
 
  async deleteAsset(index: number) {
    await this.assetService.deleteAsset(this.assets[index].assetId).toPromise();
    this.assets = await this.assetService.getAssets().toPromise();
  }
 
  back(){
    this.router.navigate(['/asset-auth']);
  }

}



