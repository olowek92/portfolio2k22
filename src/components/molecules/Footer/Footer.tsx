import React from 'react'
import { Test, FooterLink } from './Footer.styles';
import { 
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook
} from 'react-icons/ai';

const GithubUrl = "https://github.com/olowek92";
const LinkedInUrl = "https://www.linkedin.com/in/wojciech-ołownia/";
const FacebookUrl = "https://www.facebook.com/woj.tek.142035";

const Footer = ():JSX.Element => {
  return (
    <Test>
        <FooterLink href={GithubUrl} target="_blank">
            <AiFillGithub />
        </FooterLink>
        <FooterLink href={LinkedInUrl} target="_blank">
            <AiFillLinkedin />
        </FooterLink>
        <FooterLink href={FacebookUrl} target="_blank">
            <AiFillFacebook />
        </FooterLink>
    </Test>
  )
}

export default Footer