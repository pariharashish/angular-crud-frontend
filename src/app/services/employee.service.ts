import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(emp: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, emp);
  }

  update(id: number, emp: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${id}`, emp);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface Employee {
  id?: number;
  name: string;
  email: string;
  department: string;
  gender: string;
}