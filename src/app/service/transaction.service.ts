import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient : HttpClient) { }


  getTransactions():Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`/api/transaction`);
  }
}
