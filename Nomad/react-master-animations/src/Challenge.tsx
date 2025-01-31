import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background:linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 50vw;

  div:first-child{
    transform-origin: right bottom;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
`

const Button = styled(motion.button)`
  border: none;
  padding: 5px;
  background-color: #fff;
  cursor: pointer;
`;

const boxVariant = {
  initial: (custom:string) => {
    return ({ backgroundColor:'rgba(255, 255, 255, 0.5)'})
  },
  hover: {scale:1.1},
}

function Challenge(){
  const arrBox = ['1','2','3','4']
  let boxTO= ['right bottom', '0% 100%', '100% 0%', '0% 0%']

  const [ id, setId ] = useState<null|string>(null);
  const [ circleId, setCircleId ] = useState(false);
  function toggleCircle(){
    setCircleId((pre)=>!pre)
  }

  return(
    <Section>
      <>
      <Grid>
        {arrBox.map( (n, idx)=> {
        return(
          <Box custom={boxTO[idx]} variants={boxVariant} whileHover='hover' initial='initial' onClick={()=>setId(n)} key={idx} layoutId={n} style={{transformOrigin:boxTO[idx]}}>
            { !circleId && n === '2' ? <Circle layoutId="circle"/> : null }
            { circleId && n === '3' ? <Circle layoutId="circle"/>: null }
          </Box>)
        })}
      </Grid>
      <AnimatePresence>
      { id ?
        <Overlay
        onClick={()=> setId(null)}
        initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <Box layoutId={id} style={{width:200, height:200, backgroundColor: 'rgba(255, 255, 255, 1)'}}/>
        </Overlay> : null}
      </AnimatePresence>
      </>
      <Button onClick={toggleCircle} whileHover={{scale:1.2, color:'rgb(199, 23, 23)'}}>Switch</Button>
    </Section>
  )
}

export default Challenge;