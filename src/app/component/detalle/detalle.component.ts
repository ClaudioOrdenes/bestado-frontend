import { Component, OnInit } from '@angular/core';
import { Fondo } from 'src/app/model/fondo';
import { FondoService } from 'src/app/services/fondo.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers:[FondoService]
})
export class DetalleComponent implements OnInit {
  public fondos :Fondo[]=[];
  public url: string;
  public title: string;

  constructor(
    private _fondoService: FondoService
  ) {
    this.url =Global.url;
    this.title=' Detalle valor cuota multi-fondos AFP';
   }

  ngOnInit() {
    this.getDetalle();
    
  }
  getDetalle(){
    
    this._fondoService.getfondos().subscribe(
      response =>{
        if(response.fondos){
          this.fondos = response.fondos;
         
        }else{
          console.log('error al obtener la info');
          
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
