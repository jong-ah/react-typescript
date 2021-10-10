import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  color: darkgray;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const FooterNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FooterNavItem = styled.div`
  margin: 30px 30px 0px 0px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
