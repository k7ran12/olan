import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-reserva-dialog-son',
  templateUrl: './reserva-dialog-son.component.html',
  styleUrls: ['./reserva-dialog-son.component.css']
})
export class ReservaDialogSonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
