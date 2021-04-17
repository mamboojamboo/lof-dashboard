import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 40%;
  box-sizing: border-box;
  background: #ffffff;
  padding: 2% 2%;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(36,106,72,0.25), 0 10px 10px rgba(36,106,72,0.22);
`;

const TitleWrapper = styled.span`
display: 'inline';
color: #408262;
font-size: 26px;
font-weight: 900;
`;

const BigNumber = styled.div`
display: flex;
justify-content: center;
align-items:flex-end;
width: 100%;
height: 100%;
color: #408262;
font-size: 120px;
font-weight: 900;
`;

export {
    Wrapper,
    TitleWrapper,
    BigNumber
};