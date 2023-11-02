import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessFlow, Header } from '@aptsi-types';
import { AccessFlowService } from '../access-flow.service';
@Component({
  selector: 'app-access-flow-search',
  templateUrl: './access-flow-search.component.html',
  styleUrls: ['./access-flow-search.component.scss']
})
export class AccessFlowSearchComponent {
  headers: Header[] = [
    {
      name: 'Access Control Flow Id',
      property: 'accessControlFlowId',
      showInDropdown: true,
    }, {
      name: 'Access Conrol Flow Name',
      property: 'accessControlFlowName',
      showInDropdown: true,
    },{
      name: 'User Type Id',
      property: 'userTypeId',
    }, {
      name: 'User Type Name',
      property: 'userTypeName',
    },{
      name: 'Asset Id',
      property: 'assetId',
    },{
      name: 'Asset Name',
      property: 'assetName',
    },
  ];
  searchText: string = '';
  filterName: string = null;
  results: any[] = [];
  
 


  
  accessFlow: AccessFlow[] = [];
 
  constructor(
    private router: Router,
    private accessFlowService:AccessFlowService
    
    ) { }

  async ngOnInit(): Promise<void> {
    this.accessFlow = await this.accessFlowService.getAccessFlows().toPromise();
  }

  async searchAccessFlow() {
    this.accessFlow = await this.accessFlowService.getAccessFlows(
      this.searchText,
      this.filterName,
    ).toPromise();
  }

  async updateAccessFlow(index: number) {
    this.router.navigate(['/access-flow/update', this.accessFlow[index].accessControlFlowId]);
  }
 
  async deleteAccessFlow(index: number) {
    await this.accessFlowService.deleteAccessFlow(this.accessFlow[index].accessControlFlowId).toPromise();
    this.accessFlow = await this.accessFlowService.getAccessFlows().toPromise();
  }

 
  back(){
    this.router.navigate(['/risk-score-authoring']);
  }
  
   
}
