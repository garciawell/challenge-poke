import styled, { css } from 'styled-components';

interface IWrapperProps {
  color: string | undefined;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px 10px;
  text-align: center;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
`;

export const Wrapper = styled.div<IWrapperProps>`
border-radius: 25px;

  ${(props) =>
    props.color === 'grass' &&
    css`
      background: #8bbe8a;
    `}
  ${(props) =>
    props.color === 'fire' &&
    css`
      background: #ffa756;
    `}
  ${(props) =>
    props.color === 'water' &&
    css`
      background: #58abf6;
    `}
  ${(props) =>
    props.color === 'bug' &&
    css`
      background: #8cb330;
    `}
  ${(props) =>
    props.color === 'normal' &&
    css`
      background: #b5b9c4;
    `}
  ${(props) =>
    props.color === 'poison' &&
    css`
      background: #9f6e97;
    `}
  ${(props) =>
    props.color === 'electric' &&
    css`
      background: #f2cb55;
    `}
  ${(props) =>
    props.color === 'ground' &&
    css`
      background: #f78551;
    `}
  ${(props) =>
    props.color === 'fairy' &&
    css`
      background: #eba8c3;
    `}
  ${(props) =>
    props.color === 'fighting' &&
    css`
      background: #eb4971;
    `}
  ${(props) =>
    props.color === 'rock' &&
    css`
      background: #6f6e78;
    `}
`;
