import { Component,Inject,OnInit } from '@angular/core';
import{FormBuilder, Validators} from "@angular/forms"
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})
export class AddassociateComponent implements OnInit {
  title="CreateAssociate"
  isedit=false;
  dialogdata:any;

  constructor(private builder:FormBuilder,private ref:MatDialogRef<AddassociateComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any){

  }
  ngOnInit(): void {
    this.dialogdata=this.data;
    this.title=this.dialogdata.title;

    
  }
  ClosePopup(){
    this.ref.close();
  }

associateform=this.builder.group({
  id:this.builder.control(0),
  name:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  phone:this.builder.control('',Validators.required),
  address:this.builder.control('',Validators.required),
  type:this.builder.control('Customer'),
  group:this.builder.control('level1'),
  status:this.builder.control(true)
})

SaveAssociate(){
  if(this.associateform.valid){

  }

}

}
