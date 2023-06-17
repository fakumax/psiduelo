import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #121212;
  color: white;
  padding: 2rem;
`;

export const FirstColumn = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  .ImageLeft {
    max-width: 100px;
    height: auto;
    display: flex;
    /* margin: 1rem auto; */
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: fit-content;
  }
`;

export const SecondColumn = styled.div`
  width: 33%;
`;
