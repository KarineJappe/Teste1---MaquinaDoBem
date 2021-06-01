import React from 'react';

import oportunidades from '../../constants/objetos';
import { Card, Footer, Header } from '../../components';
import { CardContainer, Container } from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <CardContainer>
                {oportunidades.map(oportunidade => <Card key={oportunidade.id} data={oportunidade} />)}
            </CardContainer>
            <Footer />
        </Container>
    );
}

export default Home;