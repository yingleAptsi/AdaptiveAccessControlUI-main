import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '@aptsi-types';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private userTypeUrl = environment.apiUrl + '/user-types';

  constructor(private http: HttpClient) { }

  getUserTypes(
    query: string = '',
    filter: string = '',
  ): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.userTypeUrl, {
      params: { query, filter },
    });
  }

  getUserType(userTypeId: number): Observable<UserType> {
    return this.http.get<UserType>(`${this.userTypeUrl}/${userTypeId}`);
  }

  createUserType(
    name: string,
    description: string,
  ): Observable<UserType> {
    return this.http.post<UserType>(this.userTypeUrl, {
      name,
      description,
    });
  }

  updateUserType(
    userTypeId: number,
    name: string,
    description: string,
  ): Observable<UserType> {
    return this.http.put<UserType>(`${this.userTypeUrl}/${userTypeId}`, {
      name,
      description,
    });
  }

  deleteUserType(userTypeId: number): Observable<UserType[]> {
    return this.http.delete<UserType[]>(`${this.userTypeUrl}/${userTypeId}`);
  }
}