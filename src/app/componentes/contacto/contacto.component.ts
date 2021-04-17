import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formContact: FormGroup;

  constructor(
    private builder: FormBuilder,
    private http: HttpClient,
  ) {
  this.formContact = this.builder.group({
    name: ['', Validators.required],
    mail: ['', Validators.compose([
      Validators.email,
      Validators.required,
      ])],
    subject: ['', Validators.required],
    msj: ['', Validators.required],
  });
  }

  ngOnInit() {
  }
  sendMailContact(data) {
    const loader = document.getElementById('formLoader');
    const bodyRequest = {
      mailfrom: data.mail + ' | ' + data.name,
      subject: data.subject,
      message: data.msj,
    };
    this.postMsj(bodyRequest);
    loader.classList.remove('d-none');
  }
  postMsj(bodyRequest) {
    const loader = document.getElementById('formLoader');
    const form = document.getElementById('formContact');
    form.classList.add('d-none');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     this.http.post('https://server.juliodaza.com', bodyRequest, {headers}).subscribe(resp => {
       if (resp === 'error') {
        loader.classList.add('d-none');
        formError.classList.remove('d-none');
        console.log(resp);
       } else {
        loader.classList.add('d-none');
        formSuccess.classList.remove('d-none');
        console.log(resp);
       }
    }, err => {
        loader.classList.add('d-none');
        formError.classList.remove('d-none');
        console.log(err);
    });
  }
  validateExistingMail(mail) {
    const inputMail = document.getElementById('mail');
      const error = document.getElementById('mailError');
      const vacio = document.getElementById('mailEmpity');
      const ok = document.getElementById('mailSuccess');
      const mailCorrect = this.validateEmail(mail);
      if (mail === '') {
        inputMail.classList.remove('is-valid');
        inputMail.classList.add('is-invalid');
        error.classList.add('d-none');
        vacio.classList.remove('d-none');
        // si mail viene con length + 1
      }
      if (mail.length > 1 && mailCorrect === false) {
          // correo mal escrito
          console.log('mal escrito');
          inputMail.classList.remove('d-none');
          vacio.classList.remove('d-none');
          error.classList.add('d-none');
          ok.classList.add('d-none');
          inputMail.classList.remove('is-valid');
          inputMail.classList.add('is-invalid');
        }
      if ( mail.length > 1 && mailCorrect === true ) {
        inputMail.classList.remove('d-none');
        vacio.classList.add('d-none');
        error.classList.add('d-none');
        inputMail.classList.remove('is-invalid');
        inputMail.classList.add('is-valid');
        ok.classList.remove('d-none');
        }
  }
  validateEmail(mail) {
    // retorna true si el mail es valido
    // tslint:disable-next-line: max-line-length
    const emailPattern = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailPattern.test(mail);
  }

}
