import React from 'react';
import styled from'styled-components';

const Wrapper = styled.section`
  padding: 4rem;
  background: papayawhip;
`;

const Emoji = styled.span`
  font-size: 2rem;
`;

const Box = styled.div`
  padding: 2rem;
  background-color: salmon;
  text-align: center;

  &:hover{
    background-color: lightblue;
    
    ${Emoji}{
      font-size: 3rem;
    }
  }
`;

function App() {
  return(
	<Wrapper>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
    </Wrapper>
  )
}

export default App;
