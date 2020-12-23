import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-reserva-dialog',
  templateUrl: './reserva-dialog.component.html',
  styleUrls: ['./reserva-dialog.component.css']
})

export class ReservaDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
    
  }

}
