import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 50vw;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;


function Layout(){
const [ id, setId ] = useState<null|string>(null);

  return (
    <Wrap>
      <Grid>
        {['1','2','3','4'].map( n => <Box onClick={()=> setId(n)} key={n} layoutId={n}/>)}
      </Grid>
      <AnimatePresence>
      { id ?
        <Overlay
        onClick={()=> setId(null)}
        initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <Box layoutId={id} style={{width:200, height:200}}/>
        </Overlay> : null}
      </AnimatePresence>
    </Wrap>
  )
}

export default Layout;