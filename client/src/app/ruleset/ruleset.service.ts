import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ruleset } from '@aptsi-types';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RulesetService {
  private rulesetUrl = environment.apiUrl + '/rulesets';

  constructor(private http: HttpClient) { }

  getRulesets(
    query: string = '',
    filter: string = '',
  ): Observable<Ruleset[]> {
    return this.http.get<Ruleset[]>(this.rulesetUrl, {
      params: { query, filter },
    });
  }

  getRuleset(rulesetId: number): Observable<Ruleset> {
    return this.http.get<Ruleset>(`${this.rulesetUrl}/${rulesetId}`);
  }

  createRuleset(
    name: string,
    description: string,
  ): Observable<Ruleset> {
    return this.http.post<Ruleset>(this.rulesetUrl, {
      name,
      description,
    });
  }

  updateRuleset(
    rulesetId: number,
    name: string,
    description: string,
  ): Observable<Ruleset> {
    return this.http.put<Ruleset>(`${this.rulesetUrl}/${rulesetId}`, {
      name,
      description,
    });
  }

  deleteRuleset(rulesetId: number): Observable<Ruleset[]> {
    return this.http.delete<Ruleset[]>(`${this.rulesetUrl}/${rulesetId}`);
  }

}
