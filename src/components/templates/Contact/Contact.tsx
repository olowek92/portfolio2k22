import React, { FC } from 'react'
import { useChangeBackground } from 'hooks/useChangeBackground';
import { ContactMain, ContactWrap } from './Contact.styles';
import Form from 'components/organisms/Form/Form';

export const Contact: FC = ():JSX.Element => {
    useChangeBackground();

  return (
    <ContactMain>
        <ContactWrap>
            <Form />
        </ContactWrap>
    </ContactMain>
  )
}
