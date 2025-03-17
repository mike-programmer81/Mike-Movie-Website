import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { AppComponent } from '../../app.component';
import { AppService } from '../../app.service';
import { category } from '../../app.model';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';



@Component({
    selector: 'selector-name',
    templateUrl: 'List.component.html',
    imports:[TableModule,ButtonModule,RatingModule,TagModule,AppComponent,FormsModule,DialogModule],
    providers: [AppService]
})

export class ListComponent  {
    AppService = inject(AppService)
     getposts !: category
     colectionComponent !: category[]
     
     @Input() image!:string
     @Input() Stars!:any[]
     @Input() id!:number
     @Input() boxOffice!:string
     @Input()Genre!:string
    
    
     openDialogIndex: number | undefined  ;
     dialogVisible: boolean = false; 

     ngOnInit(): void {
       this.AppService.getcolectionComponent().subscribe({
         next: ((_res) => {
           this.colectionComponent = _res as category[]
          
        
         })
       })
   
 }

 handleDelete(id:number):void{
  this.colectionComponent=this.colectionComponent.filter(item => item.id !== id)
  }
  showDialog(index: number) {
    this.openDialogIndex = index;
    this.dialogVisible = true;
    
  }
  track(index: number, item: any) {
    return item.id; 
   
  }
  
}