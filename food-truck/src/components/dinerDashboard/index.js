import React from 'react';
import styled from 'styled-components';
import DinerDashboardHeader from './header';
import TruckList from './Truck-List';


const Container = styled.section`
    width: 100vw;
`;

const DinerDashboard = (props) => {

    return (
    <Container>
        <DinerDashboardHeader/>
        <TruckList />

    </Container>);
};

export default DinerDashboard;