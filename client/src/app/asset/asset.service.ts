import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Asset } from '@aptsi-types';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { Asset } from '../../../../types/src/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private assetUrl = environment.apiUrl + '/assets';

  constructor(private http: HttpClient) { }

  getAssets(
    query: string = '',
  ): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.assetUrl, {
      params: { query },
    });
  }

  getAsset(assetId: number): Observable<Asset> {
    return this.http.get<Asset>(`${this.assetUrl}/${assetId}`);
  }

  createAsset(
    name: string,
    description: string,
  ): Observable<Asset> {
    return this.http.post<Asset>(this.assetUrl, {
      name,
      description,
    });
  }

  updateAsset(
    assetId: number,
    name: string,
    description: string,
  ): Observable<Asset> {
    return this.http.put<Asset>(`${this.assetUrl}/${assetId}`, {
      name,
      description,
    });
  }

  deleteAsset(assetId: number): Observable<Asset[]> {
    return this.http.delete<Asset[]>(`${this.assetUrl}/${assetId}`);
  }

}
