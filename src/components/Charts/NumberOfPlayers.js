import React from 'react';

import { Wrapper, TitleWrapper, BigNumber } from './units';

import { numberOfPlayersData } from '../../mockupData';

const NumberofPlayers = ({title}) => {
    return (
        <Wrapper>
            <TitleWrapper>{title}</TitleWrapper>
            <BigNumber>{numberOfPlayersData}</BigNumber>
        </Wrapper>
    )
};

export default NumberofPlayers;