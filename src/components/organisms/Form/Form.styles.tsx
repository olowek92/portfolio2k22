import styled from "styled-components";

export const FormWrap = styled.form`
    height: 75vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Label = styled.label`
    width: 70%;
    margin-bottom: 30px;
`

export const DivName = styled.div`
    display: flex;
`

export const DivEmail = styled.div`
    display: flex;
`

export const DivQuestion = styled.div`
    width: 100%;
    position: relative;
`

export const DivButton = styled.div`
    display: flex;
`

export const ImgFullArrow = styled.img`

`

export const ImgBlankArrow = styled.img`

`

export const Input = styled.input`
    width: 100%;
    outline: 0 none transparent;
    resize: none;
    background: transparent;
    border: none;
    color: white;
    flex-grow: 1;
    margin-left: 15px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
`

export const Span = styled.span`
  font-size: 12px;
  color: red;
  height: 10px;
  width: 100%;
  display: block;
`;

export const Textarea = styled.textarea`
    width: 74%; 
    outline: 0 none transparent;
    resize: none;
    background: transparent;
    border: none;
    color: white;
    flex-grow: 1;
    margin-left: 15px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    position: absolute;
    top: 15px;
`

export const Button = styled.button`
    outline: 0 none transparent;
    cursor: pointer;
    background: transparent;
    border: none;
    color: white;
    margin-left: 15px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
`