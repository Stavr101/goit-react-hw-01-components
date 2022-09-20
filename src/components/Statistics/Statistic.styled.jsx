import styled from 'styled-components';

export const StatBox = styled.section`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
`;

export const StatTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #fff;
  color: #585c5f;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  border-radius: 6px;
`;

export const StatistikList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatItems = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 64px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
`;

export const StatText = styled.span`
  font-size: 22px;
  color: #000;
`;

export const StatTitleText = styled.span`
  font-weight: 700;
  color: #000;
`;
