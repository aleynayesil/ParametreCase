import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Representative } from '../model/representative';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService,MessageService]
})
export class TaskComponent implements OnInit {

  tasks:Task[]=[];

  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = false;

  task: Task;

  taskDialog?: boolean;

  submitted?: boolean;

  selectedPerson:any [] = [];

  value:number = 0;

  constructor(
    private taskService: TaskService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) { }



  ngOnInit() {
    this.primengConfig.ripple = true;
    this.taskService.getTasks().subscribe({
      next: (data:any) => {
        this.tasks = data;
        console.log(this.tasks)
        this.chartValue();
      },
      error: (err: Error) => {
        console.log(err)
      },
      complete: () => {
        console.log('işlem tamamlandı');
      }
    });
  
      this.representatives = [
        { name: "Amy Elsner", image: "user2.png" },
        { name: "Anna Fali", image: "user3.png" },
        { name: "Asiya Javayant", image: "user3.png" },
        { name: "Bernardo Dominic", image: "user4.png" },
        { name: "Elwin Sharvill", image: "user1.png" },
        { name: "Ioni Bowcher", image: "user2.png" },
        { name: "Ivan Magalhaes", image: "user3.png" },
        { name: "Onyama Limba", image: "user4.png" },
        { name: "Stephen Shaw", image: "user1.png" },
        { name: "XuXue Feng", image: "user2.png" }
      ];
  
      this.statuses = [
        { label: "süreçte", value: "süreçte" },
        { label: "onaylandı", value: "onaylandı" }
      ];
    
  }

  saveTask(task:Task,selectedPerson:any){//Yeni task oluşturur
    this.taskService.createTask({id:task.id,
                                    content:task.content,
                                    type:task.type,
                                    isCompleted:false,
                                    representative:selectedPerson
                                  }).subscribe(task=>{
      this.hideDialog();
      this.chartValue();
      window.location.reload();
    });
  }

  changeStatus(id:any,isCompleted:any,representative:any) { 
    console.log(isCompleted.checked); 
    if (isCompleted.checked) { //Checked olup olmama durumuna göre durumu güncelliyor
      this.taskService.getTaskById(id).subscribe(data=>{
        console.log("f",representative);
        this.taskService.updateTaks({id:data.id,
                                        content:data.content,
                                        type:data.type,
                                        isCompleted:true,
                                        representative:representative})
        .subscribe(()=>{
          this.chartValue();})
      });
    }else{
      this.taskService.getTaskById(id).subscribe(data=>{
        console.log("f",representative);
        this.taskService.updateTaks({id:data.id,
                                        content:data.content,
                                        type:data.type,
                                        isCompleted:false,
                                        representative:representative})
        .subscribe(()=>{
          this.chartValue();})
      });
    }
  } 
  hideDialog() {
    //Task eklemek için açılan modalı kapatır.
    this.taskDialog = false;
    this.submitted = false;
    this.selectedPerson = [];
  }
  openNew() {
    //Yeni task oluşturmak için modalı açar
    this.task = {};
    this.submitted = false;
    this.taskDialog = true;
  }
  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Uyarı', detail: 'Seçtiğiniz görev başarıyla silindi' ,life:2000});
  }
  
  deleteTask(id:number) {
    //Taskı siler
    this.taskService.deleteTask(id).subscribe( x => {
      this.showWarn();
      this.chartValue();
    });
    setTimeout(() => {
      window.location.reload();//Silindi uyarısıgöründükten sonra sayfayı yeniden yükler.
    }, 2000);
  }

  chartValue(){
    //Tamamlanmış olan taskların yüzdesini gösterir
    this.value = Math.floor((this.tasks.filter(x=>x.isCompleted).length * 100) / this.tasks.length);
  }
}
