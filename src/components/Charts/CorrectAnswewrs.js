import React from 'react';

import { Wrapper, TitleWrapper, BigNumber } from './units';

import { correctAnswersData } from '../../mockupData';

const CorrectAnswers = ({title}) => {
    return (
        <Wrapper>
            <TitleWrapper>{title}</TitleWrapper>
            <BigNumber>{correctAnswersData}</BigNumber>
        </Wrapper>
    )
};

export default CorrectAnswers;