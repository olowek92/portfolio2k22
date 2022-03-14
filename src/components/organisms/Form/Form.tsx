import React, { FC, useState } from 'react';
import emailjs from "emailjs-com";
import { 
  FormWrap,
  Label,
  DivName,
  DivEmail,
  DivQuestion,
  DivButton,
  ImgFullArrow,
  ImgBlankArrow,
  Input,
  Span,
  Textarea,
  Button
} from './Form.styles';
import FullArrow from 'assets/images/FullArrow.png'; 
import BlankArrow from 'assets/images/BlankArrow.png'; 

const Form:FC = ():JSX.Element => {
  
  const errorMessages = {
    nameRequired: 'Imię jest wymagane',
    nameTooShort: 'Imię jest za krótkie',
    emailRequired: 'E-mail jest wymagany',
    emailIncorrect: 'Niepoprawny adres e-mail',
    messageRequired: 'Wiadomość jest wymagana',
    messageTooShort: 'Wiadomość jest za krótka',
  }

  const succeedMessage = {
      formSent: 'Formularz wysłany poprawnie!'
  }

const validate = (form: { name: any; email: any; message: any; }): string => {

    if(!form.name) {
        return errorMessages.nameRequired
    } else if(form.name.length < 3) {
        return errorMessages.nameTooShort
    }

    if(!form.email) {
        return errorMessages.emailRequired
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
        return errorMessages.emailIncorrect
    }

    if(!form.message) {
        return errorMessages.messageRequired
    } else if (form.message.length <= 15) {
        return errorMessages.messageTooShort
    }

    return succeedMessage.formSent;
}

const [error, setError] = useState('');
const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
})

const updateField = (e:any):void => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
}

const SendEmail = (e:any):void => {
    e.preventDefault();

    const errorMsg = validate(form);

    if(errorMsg) {
        setError(errorMsg);
    }

    if(errorMsg === succeedMessage.formSent) {
        emailjs.sendForm('service_pcayoyj', 'template_1iqqvaz', e.target, 'user_kdgSj2t9GywDNk9JMRvx6')
    .then((result) => {
        console.log(result.text);
    }, (err) => {
        console.log(err.text);
    });
    e.target.reset();
    }
}

  return (
    <FormWrap onSubmit={SendEmail} noValidate>
      <Label htmlFor='name'>
        <DivName>
          <ImgFullArrow 
            src={FullArrow}
            alt="FullArrow"/>
          <Input 
            name="name"
            type="text" 
            placeholder="Name"
            id='name'
            onChange={updateField}
          />
        </DivName>
        <Span>
          {errorMessages.nameRequired === error ? error : ""}
          {errorMessages.nameTooShort === error ? error : ""}
        </Span>
      </Label>
      <Label htmlFor='email'>
        <DivEmail>
          <ImgBlankArrow 
            src={BlankArrow} 
            alt="BlankArrow"/>
          <Input 
            name="email"
            type="email" 
            placeholder="E-mail"
            id='email'
            onChange={updateField}
          />
        </DivEmail>
        <Span>
          {errorMessages.emailRequired === error ? error : ""}
          {errorMessages.emailIncorrect === error ? error : ""}
        </Span>
      </Label>
      <Label htmlFor='message'>
        <DivQuestion>
          <ImgFullArrow 
            src={FullArrow}
            alt="FullArrow"
          />
          <Textarea
            name="message"
            placeholder="How are you?"
            id='message'
            onChange={updateField}
          />
        </DivQuestion>
        <Span>
          {errorMessages.messageRequired === error ? error : ""}
          {errorMessages.messageTooShort === error ? error : ""}
        </Span>
      </Label>
      <Label htmlFor='btn'>
        <DivButton>
          <ImgBlankArrow src={BlankArrow} alt="BlankArrow"/>
          <Button type="submit" id='btn'>send</Button>
        </DivButton>
        <Span>
          {succeedMessage.formSent === error ? error : ""}
        </Span>
      </Label>
    </FormWrap>
  )
}

export default Form;
