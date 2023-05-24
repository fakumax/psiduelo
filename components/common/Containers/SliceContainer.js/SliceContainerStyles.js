import styled from "styled-components";

export const SliceContainerBase = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.sliceContainer.maxWidth};
  padding: ${(props) => props.theme.sliceContainer.padding.desktop};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.boxed && "48px"};
  background: ${(props) => props.boxed && props.theme.colors.bgColorTertiary};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.boxed && "32px"};
  }
`;
