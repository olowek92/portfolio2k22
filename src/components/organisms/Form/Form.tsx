import React, { FC, useRef } from 'react';
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
  Textarea,
  Button
} from './Form.styles';
import FullArrow from 'assets/images/FullArrow.png'; 
import BlankArrow from 'assets/images/BlankArrow.png'; 

const Form:FC = ():JSX.Element => {

  const sendEmail = (e:any):void => {
    e.preventDefault();
    console.log(e);

    emailjs.sendForm('service_pcayoyj', 'template_1iqqvaz', e.target, 'user_kdgSj2t9GywDNk9JMRvx6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <FormWrap onSubmit={sendEmail}>
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
          />
        </DivName>
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
          />
        </DivEmail>
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
          />
        </DivQuestion>
      </Label>
      <Label htmlFor='btn'>
        <DivButton>
          <ImgBlankArrow src={BlankArrow} alt="BlankArrow"/>
          <Button type="submit" id='btn'>wyślij</Button>
        </DivButton>
      </Label>
    </FormWrap>
  )
}

export default Form;
