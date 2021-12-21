import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css'],
})
export class UserInfosComponent implements OnInit {
  form = new FormGroup({});
  roles: any[] = [];
  updateView: boolean = false;
  name: string = 'Polo'; //Todo: charger avec service user get => on init
  role: string = 'Sorcier'; //Todo: charger avec service user get => on init

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      role: '',
    });
    this.roles = [
      { name: 'Guerrier' },
      { name: 'Alchimiste' },
      { name: 'Sorcier' },
      { name: 'Espions' },
      { name: 'Enchanteur' },
    ];
  }

  updateViewReq(req: boolean) {
    this.updateView = req;
    console.log('update View add');
  }

  updaterole(form: NgForm) {
    this.role = Object(form).role;
    this.updateViewReq(false);
    //todo: service user updateRole()
  }
}
