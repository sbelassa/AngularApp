import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-client',
  templateUrl: './form-reactive-client.component.html',
  styleUrls: ['./form-reactive-client.component.scss']
})
export class FormReactiveClientComponent implements OnInit {

  public states = Object.values(ClientState);
  @Output() nItem: EventEmitter<Client> = new EventEmitter();
  public form: FormGroup;
  public init = new Client();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public onSubmit(): void {
    this.nItem.emit(this.form.value);
  }

  public isError(nfc: string): boolean {
    return this.form.get(nfc).invalid && this.form.get(nfc).touched;
  }

  private createForm() {
    this.form = this.fb.group({
      id: [
        this.init.id
      ],
      nom: [
        this.init.nom,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      email: [
        this.init.email,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      state: [this.init.state],
    });
  }

}
