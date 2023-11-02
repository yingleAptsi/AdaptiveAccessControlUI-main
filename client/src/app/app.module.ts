import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { RulesetCreateOrUpdateComponent } from './ruleset/ruleset-create-or-update/ruleset-create-or-update.component';
import { RulesetSearchComponent } from './ruleset/ruleset-search/ruleset-search.component';
import { AssetCreateOrUpdateComponent } from './asset/asset-create-or-update/asset-create-or-update.component';
import { AssetSearchComponent } from './asset/asset-search/asset-search.component';
import { RiskScoreAuthoringComponent } from './risk-score-authoring/risk-score-authoring.component';
import { RulesCreateOrUpdateComponent } from './rules/rules-create/rules-create/rules-create-or-update.component';
import { RulesSearchComponent } from './rules/rules-search/rules-search/rules-search.component';
import { AccessFlowCreateOrUpdateComponent } from './access-flow-authoring/access-flow-create-or-update/access-flow-create-or-update.component';
import { AccessFlowSearchComponent } from './access-flow-authoring/access-flow-search/access-flow-search.component';
import { UserTypeCreateOrUpdateComponent } from './user-type/user-type-create-or-update/user-type-create-or-update.component';
import { UserTypeSearchComponent } from './user-type/user-type-search/user-type-search.component';
import { ProductsComponent } from './products/products.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesetSearchComponent,
    RulesetCreateOrUpdateComponent,
    AssetCreateOrUpdateComponent,
    AssetSearchComponent,
    RiskScoreAuthoringComponent,
    RulesCreateOrUpdateComponent,
    RulesSearchComponent,
    AccessFlowCreateOrUpdateComponent,
    AccessFlowSearchComponent,
    UserTypeCreateOrUpdateComponent,
    UserTypeSearchComponent,
    ProductsComponent,
    LoginPageComponent,
    SignUpPageComponent,
    
  ],
  
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, routes, SharedModule,
   RouterModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
