import styled, { css } from 'styled-components';

export const SectionWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ first }) =>
    first &&
    css`
      border-radius: 10px 0 0 10px;
      background-color: ${({ theme }) => theme.colors.white};
    `};
  ${({ second }) =>
    second &&
    css`
      border-radius: 0 10px 10px 0;
      background-color: ${({ theme }) => theme.colors.blue};
    `};

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 100%;
    height: 50%;
    ${({ first }) =>
      first &&
      css`
        border-radius: 10px 10px 0 0;
      `};
    ${({ second }) =>
      second &&
      css`
        border-radius: 0 0 10px 10px;
      `};
  }
`;
