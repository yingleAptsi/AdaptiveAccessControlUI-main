// import { Routes, RouterModule } from '@angular/router';

import { Routes, RouterModule } from '@angular/router';
import { RulesetSearchComponent } from './ruleset/ruleset-search/ruleset-search.component';
import { RiskScoreAuthoringComponent } from './risk-score-authoring/risk-score-authoring.component';
import { RulesCreateOrUpdateComponent } from './rules/rules-create/rules-create/rules-create-or-update.component';
import { RulesSearchComponent } from './rules/rules-search/rules-search/rules-search.component';
import { RulesetCreateOrUpdateComponent } from './ruleset/ruleset-create-or-update/ruleset-create-or-update.component';
import { UserTypeSearchComponent } from './user-type/user-type-search/user-type-search.component';
import { UserTypeCreateOrUpdateComponent } from './user-type/user-type-create-or-update/user-type-create-or-update.component';
import { AssetSearchComponent } from './asset/asset-search/asset-search.component';
import { AssetCreateOrUpdateComponent } from './asset/asset-create-or-update/asset-create-or-update.component';
import { AccessFlowCreateOrUpdateComponent } from './access-flow-authoring/access-flow-create-or-update/access-flow-create-or-update.component';
import { AccessFlowSearchComponent } from './access-flow-authoring/access-flow-search/access-flow-search.component';
import { ProductsComponent } from './products/products.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';


export const router: Routes = [
  {path: '', redirectTo : 'risk-score-authoring', pathMatch : 'full' },
  {path: 'risk-score-authoring', component: RiskScoreAuthoringComponent},
  {path: 'ruleset', redirectTo: 'ruleset/search', pathMatch: 'full'}, 
  {path: 'ruleset/search',component:RulesetSearchComponent},
  {path: 'ruleset/create', component: RulesetCreateOrUpdateComponent, data: {create: true}},
  {path: 'ruleset/update/:rulesetId', component: RulesetCreateOrUpdateComponent, data: {create: false}},
  {path: 'asset', redirectTo: 'asset/search', pathMatch: 'full'}, 
  {path: 'asset/search', component: AssetSearchComponent},
  {path: 'asset/create', component: AssetCreateOrUpdateComponent, data: {create: true}},
  {path: 'asset/update/:assetId', component: AssetCreateOrUpdateComponent, data: {create: false}},
  {path: 'access-flow/create', component: AccessFlowCreateOrUpdateComponent, data: {create: true}},
  {path: 'access-flow/update/:accessflowId', component: AccessFlowCreateOrUpdateComponent, data: {create: false}},
  {path: 'access-flow/search',component: AccessFlowSearchComponent},
  {path: 'rules', component: RulesSearchComponent},
  {path: 'user-type', redirectTo: 'user-type/search', pathMatch: 'full'}, 
  {path: 'user-type/search', component: UserTypeSearchComponent}, 
  {path: 'user-type/create', component: UserTypeCreateOrUpdateComponent, data: {create: true}},
  {path: 'user-type/update/:updateId', component: UserTypeCreateOrUpdateComponent, data: {create: false}},
  {path: 'rules', redirectTo: 'rules/search', pathMatch: 'full'}, 
  {path: 'rules/search', component: RulesSearchComponent},
  {path: 'rules/create', component: RulesCreateOrUpdateComponent, data: {create: true}},
  {path: 'rules/update/:ruleId',component:RulesCreateOrUpdateComponent, data: {create: false}},
  {path: 'products',component:ProductsComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'sign-up', component:SignUpPageComponent},
];

export const routes = RouterModule.forRoot(router, { enableTracing: true });
