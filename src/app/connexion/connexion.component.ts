import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  form = new FormGroup({});
  connected: boolean = true;

  roles: any[] = [];

  @Output() connectEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      password: '',
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

  submit(form: NgForm) {
    console.log(form);
    //todo: creation services connexion.login
    //todo: creation services connexion.inscription

    if (this.connected) {
      console.log('Service connexion');
    } else {
      console.log('Service inscription');
    }
    this.connectEvent.emit();
  }

  connectView(req: boolean) {
    this.connected = req;
  }
}
