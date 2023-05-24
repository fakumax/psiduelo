import styled from 'styled-components';

export const SectionContainerBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.sectionContainer.padding.desktop};
  position: relative;
  padding: ${(props) => props.boxed && '64px 24px'};
  background: ${(props) => props.background};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  z-index: ${(props) => props.boxed && '1'};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.sectionContainer.padding.mobile};
    padding-top: ${(props) => props.paddingMobileTop};
    padding-bottom: ${(props) => props.paddingMobileBottom};
    padding: ${(props) => props.boxed && '0 16px'};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin: ${(props) => props.boxed && '32px 0'};
  }
`;
export const SectionBackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;
