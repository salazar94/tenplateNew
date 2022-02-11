import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dientes',
  templateUrl: './dientes.component.html',
  styleUrls: ['./dientes.component.css']
})
export class DientesComponent implements OnInit {
  dientes = {
    diente1: false,
    diente2: false,
    diente3: false,
    diente4: false,
    diente5: false,
    diente6: false,
    diente7: false,
    diente8: false,
    diente9: false,
    diente10: false,
    diente11: false,
    diente12: false,
    diente13: false,
    diente14: false,
    diente15: false,
    diente16: false,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
