import styled from 'styled-components';

export const RadioContainer = styled.div`
  margin: 11px 0;
  display: flex;
  cursor: pointer;
  user-select: none;
`;

export const OuterCircle = styled.div`
  width: 22px;
  height: 22px;
  min-width: 22px;
  min-height: 22px;
  background-color: #373e44;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  transition: all 0.1s linear;
  &.unselected {
  }
`;

export const InnerCircle = styled.div`
  width: 8px;
  height: 8px;

  background-color: #eee;
  transition: all 0.1s linear;
  &.unselected-circle {
    width: 0;
    height: 0;
  }
`;

export const Label = styled.div`
  color: #eee;
`;
