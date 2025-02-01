import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";
import { INowPlaying } from "../type";
import styled from "styled-components";
import Loader from "../components/Loader";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Wrapper = styled.div`
  background: black;
`;

const Banner = styled.div<{$bgPhoto:string}>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)), url(${props => props.$bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled(motion.div)`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: #fff;
  height: 200px;
`;

const rowVariants = {
  hidden:{
    x: window.innerWidth + 10
  },
  visible:{
    x:0
  },
  exit:{
    x:-window.innerWidth - 10
  }
}

function Home(){
  const { data, isLoading} = useQuery<INowPlaying>({queryKey:["movies","nowPlaying"], queryFn:getMovies})
  const [ index, setIndex] = useState(0);
  function incraseIndex(){
    setIndex(pre => pre+1)
  }

  return (
    <Wrapper>
      { isLoading ? <Loader/> :
        <>
          <Banner $bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence>
              <Row variants={rowVariants} initial='hidden' animate='visible' exit='exit' transition={{type:'tween', duration:1}} key={index}>
                {[1,2,3,4,5,6].map((ele)=>{
                  return <Box key={ele}>{ele}</Box>
                })}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      } 
    </Wrapper>
  )
}

export default Home;