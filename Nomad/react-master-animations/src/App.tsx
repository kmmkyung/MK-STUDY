import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box1 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(Box1)`
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`


const Circle = styled(motion.div)`
  background-color: #fff;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariant = {
  start: { opacity: 0, scale: 0 },
  end: { opacity: 1, scale: 1,
    transition:{ bounce: 0.5, duration: 1, delayChildren: 1, staggerChildren: 0.2 }
  }
};

const circleVariant = {
  start: { opacity:0, y:10 },
  end: { opacity:1, y:0 }
}

const dragVariant = {
  hover: {scale:1.5, rotateZ:90},
  click: {borderRadius:'50%', scale:1},
  drag: { backgroundColor:'rgb(46,204,113)', transition:{duration: 2}}
}

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  return (
    <Wrapper >
      {/* <Box 
      transition={{ type: 'spring', bounce: 0.6, delay: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}/> */}

      {/* <Box2 variants={boxVariant} initial='start' animate='end'>
        <Circle variants={circleVariant}/>
        <Circle variants={circleVariant}/>
        <Circle variants={circleVariant}/>
        <Circle variants={circleVariant}/>
      </Box2> */}

      {/* <BiggerBox ref={biggerBoxRef}>
        <Box1 drag dragSnapToOrigin dragElastic={0.5} dragConstraints={ biggerBoxRef } variants={dragVariant} whileHover='hover' whileTap='click'  whileDrag='drag' />
      </BiggerBox> */}

      <Box1 drag='x' dragSnapToOrigin style={{x}} />

    </Wrapper>
  );
}

export default App;