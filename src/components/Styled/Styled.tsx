import React from "react";
import styled from "styled-components";

export const Styled = () => {
  const Container = styled.div`
    background-color: antiquewhite;
    padding: 15px;
  `;

  const StyledP = styled.p`
    color: purple;
  `;

  return (
    <Container>
      <StyledP>This is a styled-component</StyledP>
    </Container>
  );
};
