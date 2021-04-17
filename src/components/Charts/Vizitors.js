import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Wrapper, TitleWrapper } from './units';

import { vizitorsData } from '../../mockupData';

const VizitorzChart = ({title}) => {
    return (
        <Wrapper>
            <TitleWrapper>{title}</TitleWrapper>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={vizitorsData} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Area type="monotone" dataKey="чел" stroke="#246a48" fill="#8ad0ae" />
                </AreaChart>
            </ResponsiveContainer>
        </Wrapper>
    )
};

export default VizitorzChart;