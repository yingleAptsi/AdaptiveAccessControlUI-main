
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Header, AccessFlow } from '@aptsi-types';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessFlowService } from '../access-flow.service';
@Component({
  selector: 'app-access-flow-create-or-update',
  templateUrl: './access-flow-create-or-update.component.html',
  styleUrls: ['./access-flow-create-or-update.component.scss']
})
export class AccessFlowCreateOrUpdateComponent {
  isCreate = false;
  existingAccessFlowId: number = null;
  accessFlow: AccessFlow = null;
  form: FormGroup;
  
  public pages: Array<string>=['Ruleset', 'Rules'];
   
  public selectedCate: string = null;
 
  constructor( private router: Router,
    private route: ActivatedRoute,
    private accessFlowService: AccessFlowService) {
   
  }


  async ngOnInit(): Promise<void> {
    this.isCreate = Boolean(this.route.snapshot.data.create);
    this.existingAccessFlowId = +this.route.snapshot.params.accessControlFlowId;

    if(!this.isCreate) {
      this.accessFlow = await this.accessFlowService.getAccessFlow(this.existingAccessFlowId).toPromise();
    }

    this.form = this.isCreate ? new FormGroup({
      
      accessControlFlowName: new FormControl(null, Validators.required),
      userTypeName: new FormControl(null, Validators.required),
      assetId: new FormControl(null, Validators.required),
      assetName: new FormControl(null, Validators.required),
    }) : new FormGroup({
     
      accesscontrolflowName: new FormControl(this.accessFlow.accessControlFlowName, Validators.required),
      userTypeName: new FormControl(this.accessFlow.userTypeName, Validators.required),
      assetId: new FormControl(this.accessFlow.assetId, Validators.required),
      assetName: new FormControl(this.accessFlow.assetName, Validators.required),
    });
  }
  async submit() {
    if (this.isCreate) {
      await this.accessFlowService.createAccessFlow(
        this.form.value.accessControlFlowName,
        this.form.value.userTypeId,
        this.form.value.userTypeName,
        this.form.value.assetId,
        this.form.value.assetName


      ).toPromise();
    } else {
      await this.accessFlowService.updateAccessFlow(
        this.existingAccessFlowId,
        this.form.value.accessControlFlowName,
        
        this.form.value.userTypeId,
        this.form.value.userTypeName,
        this.form.value.assetId,
        this.form.value.assetName
      ).toPromise();
    }
    this.router.navigate(['/access-flow/search']);
  }
  
  
  public resetCategories(){
    this.selectedCate=null;
  }
}
