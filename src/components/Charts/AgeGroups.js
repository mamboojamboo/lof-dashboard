import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Wrapper, TitleWrapper } from './units';

import { ageGroupsData } from '../../mockupData';

const AgeGroups = ({title}) => {
    return (
        <Wrapper>
            <TitleWrapper>{title}</TitleWrapper>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={ageGroupsData}
                margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
                >
                <XAxis dataKey="age" />
                <Tooltip />
                <Bar dataKey="чел" stroke="#246a48" fill="#8ad0ae" />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
};

export default AgeGroups;

