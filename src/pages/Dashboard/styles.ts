import styled from 'styled-components';
import { Pagination } from '@material-ui/lab';
import { Text } from 'components/elements';
import { Grid } from '@material-ui/core';
import WatermarkLarge from 'assets/img/watermark-pokeball-large.svg';

export const Box = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px 320px;
  grid-gap: 15px 15px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 35px 0;
  width: 100%;
`;

export const Header = styled(Grid)`
  margin-bottom: 35px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const PaginationStyled = styled(Pagination)`
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;

export const TitleStyled = styled(Text)`
  font-size: 42px;
  color: #17171b;
`;

export const WrapperBg = styled.div`
  background: url(${WatermarkLarge}) left bottom -200px no-repeat;
  height: 100vh;
`;
