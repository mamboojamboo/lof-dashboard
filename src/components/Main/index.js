import React from 'react';

import { 
    Vizitors,
    NumberofPlayers,
    AgeGroups,
    GenderGroups,
    LevelGroups,
    CorrectAnswers 
} from '../Charts';

import { MainPageWrapper } from './units';


const Main = () => {
    return (
        <MainPageWrapper>
            <Vizitors title='Уникальные посетители' />
            <NumberofPlayers title='Общее количество игроков' />
            <AgeGroups title='Возрастные группы' />
            <GenderGroups title='Гендерное распределение' />
            <LevelGroups title='Распределение по уровням' />
            <CorrectAnswers title='Процент правильных ответов' />
        </MainPageWrapper>)
};

export default Main;