import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessFlow } from '@aptsi-types';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessFlowService {
  private accessFlowUrl = environment.apiUrl ;

  constructor(private http: HttpClient) { }

  getAccessFlows(
    query: string = '',
    filter: string = '',
  ): Observable<AccessFlow[]> {
    return this.http.get<AccessFlow[]>(this.accessFlowUrl, {
      params: { query, filter },
    });
  }

  getAccessFlow(accesssControlFlowId: number): Observable<AccessFlow> {
    return this.http.get<AccessFlow>(`${this.accessFlowUrl}/${accesssControlFlowId}`);
  }

  createAccessFlow(
    accessControlFlowName: string,
    userTypeId: number,
    userTypeName: string,
   
    assetId: number,
    assetName: string
  ): Observable<AccessFlow> {
    return this.http.post<AccessFlow>(this.accessFlowUrl, {
        accessControlFlowName,
        userTypeId,
        userTypeName,
        assetId,
        assetName
    });
  }

  updateAccessFlow(
    accessControlFlowId: number,
    accessControlFlowName: string,
    userTypeId: number,
    userTypeName: string,
    assetId: number,
    assetName: string
  ): Observable<AccessFlow> {
    return this.http.put<AccessFlow>(`${this.accessFlowUrl}/${accessControlFlowId}`, {
        accessControlFlowName,
        userTypeId,
        userTypeName,
        assetId,
        assetName
    });
  }

  deleteAccessFlow(accessControlFlowId: number): Observable<AccessFlow[]> {
    return this.http.delete<AccessFlow[]>(`${this.accessFlowUrl}/${accessControlFlowId}`);
  }

}