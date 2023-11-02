
import { Injectable } from '@angular/core';
import { Rule } from '@aptsi-types';
import { environment } from '@env';
import { Observable } from 'rxjs';
import axios from 'axios'; // Import Axios

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private ruleUrl = environment.apiUrl + '/rule';

  constructor() { }

  getRules(query: string = '', filter: string = ''): Observable<Rule[]> {
    return new Observable((observer) => {
      axios.get(this.ruleUrl, {
        params: { query, filter }
      })
      .then(response => {
        
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  getRule(ruleId: number): Observable<Rule> {
    return new Observable((observer) => {
      axios.get(`${this.ruleUrl}/${ruleId}`)
      .then(response => {
        
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  createRule(
    ruleId: number,
    name: string,
    type: string,
    description: string,
    stringRepresentation: string
  ): Observable<Rule> {
    return new Observable((observer) => {
      axios.post(this.ruleUrl, {
        ruleId,
        name,
        type,
        description,
        stringRepresentation
      })
      .then(response => {
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  updateRule(
    ruleId: number,
    name: string,
    type: string,
    description: string,
    stringRepresentation: string
  ): Observable<Rule> {
    return new Observable((observer) => {
      axios.put(`${this.ruleUrl}/${ruleId}`, {
        name,
        type,
        description,
        stringRepresentation
      })
      .then(response => {
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  deleteRule(ruleId: number): Observable<Rule[]> {
    return new Observable((observer) => {
      axios.delete(`${this.ruleUrl}/${ruleId}`)
      .then(response => {
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}