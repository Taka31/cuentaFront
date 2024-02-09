import { Component } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transactions : Transaction[] = [];

  constructor(private myService : TransactionService){ 

  }

  ngOnInit():void{
    this.myService.getTransactions().subscribe(transactions=>this.transactions=transactions);
  }

}
