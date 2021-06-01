import React from 'react';
import { Typography } from '..';
import { CheckBox, CheckBoxContainer, CheckBoxLabel, Container } from './styles';

export const Header = () => {
    return (
        <Container>
            <Typography size='xl' weight='regular'>
                Oportunidades em destaque
            </Typography>
            <Typography color='three' marginLeft='auto' marginRight='1rem'>
                Geolocalização ativa
            </Typography>
            <CheckBoxContainer >
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxContainer>

        </Container>
    )
}

