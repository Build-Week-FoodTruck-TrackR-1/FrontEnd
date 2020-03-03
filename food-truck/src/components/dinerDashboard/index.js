import React from 'react';
import styled from 'styled-components';
import DinerDashboardHeader from './header';
// import Map from './map';
import TruckList from './Truck-List';
// import MapInterface from './mapinterface';

const Container = styled.section`
    width: 100vw;
`;

const DinerDashboard = (props) => {

    return (
    <Container>
        <DinerDashboardHeader/>
        {/* <MapInterface /> */}
        {/* <Map /> */}
        <TruckList />

    </Container>);
};

export default DinerDashboard;