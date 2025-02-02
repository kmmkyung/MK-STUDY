import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";
import { INowPlaying } from "../type";
import styled from "styled-components";
import Loader from "../components/Loader";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

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

const Box = styled(motion.div)<{$bgPhoto:string}>`
  background-color: #fff;
  height: 200px;
  background-image: url(${props => props.$bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;

  &:first-child{
    transform-origin: left center;
  }
  &:last-child{
    transform-origin: right center;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${props => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;

  h4{
    text-align: center;
    font-size: 16px;
  }
`;

const Modal = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  background-color: ${props => props.theme.black.lighter};
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;;
  background-color: rgba(0,0,0,0.8);
  opacity:0;
`;

const ModalCover = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
`;

const ModalTitle = styled.h3`
  color: ${props=> props.theme.white.lighter}; 
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  padding: 0 10px;
`;

const ModalOverview = styled.p`
  color: ${props=> props.theme.white.lighter}; 
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  padding: 0 10px;

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

const boxVariants = {
  normal:{
    scale:1
  },
  hover:{
    scale:1.3, y:-50, zIndex:99, transition:{delay:0.3, duration:0.3, type:'tween'}
  }
}

const infoVariants = {
  hover:{
    opacity: 1, transition:{delay:0.3, duration:0.3, type:'tween'}
  }
}

function Home(){
  const navigate = useNavigate()
  const { data, isLoading } = useQuery<INowPlaying>({queryKey:["movies","nowPlaying"], queryFn:getMovies})
  const [ index, setIndex ] = useState(0);
  const [ leaving, setLeaving ] = useState(false);
  const offset = 6;
  const bigMovieMatch = useMatch('/movies/:movieId');
  const { scrollY } = useScroll();
  const clickedMovie = bigMovieMatch?.params.movieId && data.results.find(movie => movie.id.toString() === bigMovieMatch.params.movieId);
  
  function increaseIndex(){
    if(data){
      if(leaving) return;
      toggleLeaving()
      const totalMovies = data.results.length -1;
      const maxIndex = Math.floor(totalMovies / offset) -1;
      setIndex(pre => pre === maxIndex ? 0 : pre+1)
    }
  }

  function toggleLeaving(){
    setLeaving((pre)=>!pre)
  }

  function onBoxClicked(movieId:number){
    navigate(`/movies/${movieId}`)
  }

  function onOverlayClick (){
    navigate('/')
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
            <AnimatePresence initial={false} onExitComplete={toggleLeaving} >
              <Row variants={rowVariants} initial='hidden' animate='visible' exit='exit' transition={{type:'tween', duration:1}} key={index}>
                {data?.results.slice(1).slice(offset*index, offset*index+offset).map((movie)=>{
                  return <Box layoutId={movie.id +''} variants={boxVariants} initial='normal' whileHover='hover' transition={{type:'tween'}} key={movie.id} $bgPhoto={makeImagePath(movie.backdrop_path, 'w500')} onClick={()=>onBoxClicked(movie.id)}>
                    <Info variants={infoVariants}>
                      <h4>{movie.title}</h4>
                    </Info>
                  </Box>
                })}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch? 
            <Overlay onClick={onOverlayClick} exit={{opacity:0}} animate={{opacity:1}}>
              <Modal style={{top:scrollY.get()+100}} layoutId={bigMovieMatch.params.movieId}>
              {clickedMovie && <>
              <ModalCover style={{backgroundImage:`linear-gradient(to bottom, transparent, black), url(${makeImagePath(clickedMovie.backdrop_path, 'w500')})`}}/>
              <ModalTitle>{clickedMovie.title}</ModalTitle>
              <ModalOverview>{clickedMovie.overview}</ModalOverview>
              </>}
              </Modal>
            </Overlay>
            : null}
          </AnimatePresence>
        </>
      } 
    </Wrapper>
  )
}

export default Home;  