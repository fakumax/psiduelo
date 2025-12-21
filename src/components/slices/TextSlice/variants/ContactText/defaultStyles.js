import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  background-color: ${(props) => props.theme.colors.bgColorLight3};
  padding: 2rem 0;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 3rem 0rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    gap: 2.5rem;
    align-items: stretch;
    padding: 0 1rem;
  }
`;

export const FormWrapper = styled.div`
  flex: 1;
  position: relative;
  margin: 30px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 40px 0;
  }
`;

export const FormSection = styled.div`
  background: white;
  padding: 3rem 1rem 2rem;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 4rem 2rem 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4.5rem 2.5rem 2.5rem;
  }
`;

export const PaperBorderTop = styled.div`
  position: absolute;
  top: -28px;
  left: 0;
  right: 0;
  height: 35px;
  z-index: 1;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    top: -43px;
    height: 45px;
  }
`;

export const PaperBorderBottom = styled.div`
  position: absolute;
  bottom: -28px;
  left: 0;
  right: 0;
  height: 35px;
  z-index: 1;
  transform: rotate(180deg);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    bottom: -43px;
    height: 45px;
  }
`;

export const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(145deg, 
    ${(props) => props.theme.colors.primary}15 0%, 
    ${(props) => props.theme.colors.primary}08 100%
  );
  border-radius: 12px;
  min-width: 280px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 320px;
    padding: 2.5rem;
  }
`;

export const SideTitle = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-size: 1.5rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.4;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.7rem;
  }
`;

export const SideText = styled.p`
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const SideButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.8rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  font-size: 0.95rem;
  text-decoration: none;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 109, 76, 0.3);
  }
`;
