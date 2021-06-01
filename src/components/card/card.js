import React from 'react';
import { Typography } from '../typography';
import { ButtonBackground, ButtonPrimary, CardList, Container, Icon, InfoItens, LineFlex, LineTitle } from './styles';


export const Card = ({ data }) => {
    console.log(data.icon);
    return (
        <Container>
            <CardList>
                <Typography size='sm' color='three' weight='medium' marginLeft='1rem' textTransform='uppercase'>
                    {data.category}
                </Typography>
                <ButtonBackground />
                <LineTitle>
                    <Typography size='lg' marginLeft='24px' marginRight="40px">
                        {data.title}
                    </Typography>
                    <Icon>
                        {data.icon}
                    </Icon>
                </LineTitle>
                <Typography size='sm' color='two' marginLeft='24px' marginRight="87px">
                    {data.status}
                </Typography>
                <LineFlex>
                    <InfoItens>
                        <Typography size='sm' space="nowrap">{data.value_service}</Typography>
                        <Typography textTransform='uppercase' size='xs' color='three' marginLeft='8px'>{data.info_service}</Typography>
                    </InfoItens>

                    <ButtonPrimary>
                        <Typography size='sm' color='four' weight='medium' textAlign='center' textTransform='uppercase'>
                            {data.button}
                        </Typography>
                    </ButtonPrimary>
                </LineFlex>
                <ButtonBackground />
                <Typography sie='sm' color='three' marginLeft='1rem'>{data.location} </Typography>
            </CardList>
        </Container >
    );
}

