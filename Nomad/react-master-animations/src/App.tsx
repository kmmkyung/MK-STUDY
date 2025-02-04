import { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useMotionValueEvent, useTransform, useViewportScroll, AnimatePresence } from "motion/react";
import Layout from "./Layout";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
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

const Svg = styled.svg`
  width: 300px;
  height: 300px;

  path {
    stroke: #fff;
    stroke-width: 2;
  }
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

const svgVariant = {
  start: {pathLength:0, fill:'rgba(255, 255, 255, 0)'},
  end: {pathLength:1, fill:'rgba(255, 255, 255, 1)'}
}

const showVariant = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360  },
  leaving: { opacity: 0, scale: 0, y:50 }
}

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)

  const xDrag = useMotionValue(0)
  const xRotateZ = useTransform(xDrag, [-800,800], [-360,360]) // 탐색값, 조건, 최대값
  // useMotionValueEvent(xScale, 'change', ()=> {console.log(xScale.get())})
  const gradient = useTransform(xDrag, [-800,800], ['linear-gradient(135deg,rgb(0, 190, 238),rgb(123, 0, 238))','linear-gradient(135deg,rgb(0, 238, 206),rgb(238, 186, 0))'])
  const { scrollYProgress } = useViewportScroll();
  const scrollYScale = useTransform(scrollYProgress, [0,1], [1,5])

  const [ showing, setShowing ] = useState(false);
  function toggleShowing(){
    setShowing((pre)=>!pre)
  }

  return (
    <Wrapper style={{ background:gradient }}>
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

      {/* <Box1 drag='x' dragSnapToOrigin style={{ x:xDrag ,scale:scrollYScale, rotateZ:xRotateZ }} /> */}

      {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path 
        variants={svgVariant}
        initial='start'
        animate='end'
        transition={{
          default:{duration:5}, fill:{duration:1, delay:3}
        }}
        fill="transparent"
        d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"/>
      </Svg> */}

      {/* <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        { showing ? (<Box1 variants={showVariant} initial='initial' animate='visible' exit='leaving'/>): null }
      </AnimatePresence> */}
    </Wrapper>
  );
}

export default App;