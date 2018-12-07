import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-prestation',
  templateUrl: './form-reactive-prestation.component.html',
  styleUrls: ['./form-reactive-prestation.component.scss']
})
export class FormReactivePrestationComponent implements OnInit {

  public states = Object.values(State);
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  public form: FormGroup;
  @Input() init = new Prestation(); // to change into input

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    //
  }

  public onSubmit(): void {
    this.nItem.emit(this.form.value);
  }

  public isError(nfc: string): boolean {
    return this.form.get(nfc).invalid && this.form.get(nfc).touched;
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      nbJour: [
        this.init.nbJour,
        Validators.min(0)
      ],
      tjmHt: [this.init.tjmHt],
      tauxTva: [this.init.tauxTva],
      state: [this.init.state],
      comment: [this.init.comment],
    });
  }
}
