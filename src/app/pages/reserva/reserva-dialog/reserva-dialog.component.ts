import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ReservaDialogSonComponent } from './reserva-dialog-son/reserva-dialog-son.component';



@Component({
  selector: 'app-reserva-dialog',
  templateUrl: './reserva-dialog.component.html',
  styleUrls: ['./reserva-dialog.component.css']
})

export class ReservaDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  segundoModal(){   
    
    const dialogRef = this.dialog.open(ReservaDialogSonComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });      
   
    }
  
  ngOnInit() {
    
  }



}
