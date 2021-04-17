import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Wrapper, TitleWrapper } from './units';

import { levelGroupsData } from '../../mockupData';

const LevelGroups = ({title}) => {
    return (
        <Wrapper>
            <TitleWrapper>{title}</TitleWrapper>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={levelGroupsData}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                >
                <XAxis dataKey="name" />
                <Tooltip />
                <Area type="monotone" dataKey="1-10" stroke="#155b39" fill="#8ad0ae" />
                <Area type="monotone" dataKey="10-20"  stroke="#155b39" fill="#39795a" />
                <Area type="monotone" dataKey="20-30"  stroke="#155b39" fill="#133927" />
                </AreaChart>
            </ResponsiveContainer>
        </Wrapper>
    )
};

export default LevelGroups;