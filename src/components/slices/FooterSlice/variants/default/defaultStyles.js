import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: min-content;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BodyContainer = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  padding: 30px 0;
  gap: 40px;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 200px;
    height: auto;
    object-fit: cover;
    max-height: fit-content;
  }
`;

export const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  padding: 0 1rem;
`;

export const AccordionItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  span {
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }

  .chevron {
    font-size: 12px;
    color: ${(props) => props.theme.colors.primary};
    transition: transform 0.3s ease;
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const AccordionContent = styled.div`
  max-height: ${(props) => (props.$isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${(props) => (props.$isOpen ? '0 16px 16px' : '0 16px')};
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .contact-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: center;

    strong {
      font-family: ${(props) => props.theme.typography.fontFamily_crimson};
      font-size: 14px;
      color: ${(props) => props.theme.colors.primary};
    }

    span, a {
      font-family: ${(props) => props.theme.typography.fontFamily_crimson};
      font-size: 14px;
      color: ${(props) => props.theme.colors.textPrimary};
    }

    a {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: none;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const IconsGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 1rem 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const Frase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.colors.bgColorLight2};
  width: 100%;
  height: 100px;
  place-content: center;
  align-items: center;
  height: 120px;
  p,
  span {
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-family: ${(props) => props.theme.typography.fontFamily_belle};
    font-size: 16px;
    margin: 0 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    place-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 150px;

    p,
    span {
      font-size: 20px;
    }
  }
`;

export const ContainerImagePlant = styled.div`
  width: 45px;
  transform-origin: 50% 50%;
  transform: rotate(-72deg);
  position: absolute;
  display: flex;
  top: 60px;
  align-self: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  margin-top: 2rem;
  align-items: center;
  h3 {
    margin: 1rem 0;
    font-size: 40px;
    line-height: 40px;
    font-family: var(--font-skeptisgraph);
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }
  p {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    font-size: 16px;
    text-align: center;
    margin: 0 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    h3 {
      font-size: 50px;
    }
  }
`;
