import { useQuery } from "@tanstack/react-query";
import { getMovies, getTopMovies, getUpcoming } from "../api";
import { INowPlaying } from "../type";
import styled from "styled-components";
import Loader from "../components/Loader";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";


const Wrapper = styled.div`
background: black;
`;

const Banner = styled.div<{$bgPhoto:string}>`
  height: 85vh;
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
  margin-bottom: 100px;

  h3{
    font-size: 14px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
`;

const RowWrap = styled.div`
  position: relative;
  height: 100%;
  height: 200px;
`;


const ArrRight = styled.div`
  position: absolute;
  right: 0;
  bottom: -200;
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  z-index: 8;
  cursor: pointer;
  transition: all 0.5s;

  &:hover{
    transform: scale(1.6);
  }
`;

const Box = styled(motion.div)<{$bgPhoto:string}>`
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
  position: fixed;
  width: 40vw;
  height: 80vh;
  top: 100px;
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
  const useQueries = () =>{
    const nowPlaying = useQuery<INowPlaying>({queryKey:["movies","nowPlaying"], queryFn:getMovies})
    const topRated = useQuery<INowPlaying>({queryKey:["movies","topRated"], queryFn:getTopMovies})
    const upcoming = useQuery<INowPlaying>({queryKey:["movies","upcoming"], queryFn:getUpcoming})
    return [nowPlaying, topRated, upcoming]
  }

  const [
    {data: nowPlayingData, isLoading: loadingNowPlaying},
    {data: topRatedData, isLoading: loadingTopRated},
    {data: upcomingData, isLoading: loadingUpcoming},
  ] = useQueries();


  const [ nowIndex, setNowIndex ] = useState(0);
  const [ topIndex, setTopIndex ] = useState(0);
  const [ upcomingDataIndex, setupcomingDataIndex ] = useState(0);
  const [ leaving, setLeaving ] = useState(false);
  const offset = 6;
  const bigMovieMatch = useMatch('/movies/:movieId');

  function findMovieById(movieId:string, ...movieLists: INowPlaying[]) {
    if (!movieId) return null;
    for (const list of movieLists) {
      const foundMovie = list?.results.find((movie) => movie.id.toString() === movieId);
      if (foundMovie) return foundMovie;
    }
    return null;
  }

  const clickedMovie = findMovieById(
    bigMovieMatch?.params.movieId,
    nowPlayingData,
    topRatedData,
    upcomingData,
  );
  
  
  function increaseIndex(data, setIndex){
    if(data){
      if(leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length -1;
      const maxIndex = Math.floor(totalMovies / offset) -1;
      setIndex(pre => pre === maxIndex ? 0 : pre + 1);
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
      { loadingNowPlaying&& loadingTopRated&& loadingUpcoming ? <Loader/> :
        <>
          <Banner $bgPhoto={makeImagePath(nowPlayingData?.results[0].backdrop_path || '')}>
            <Title>{nowPlayingData?.results[0].title}</Title>
            <Overview>{nowPlayingData?.results[0].overview}</Overview>
          </Banner>

          <Slider>
            <h3>Trending Now</h3>
            <RowWrap>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving} >
                  <Row variants={rowVariants} initial='hidden' animate='visible' exit='exit' transition={{type:'tween', duration:1}} key={nowIndex}>
                    {nowPlayingData?.results.slice(1).slice(offset*nowIndex, offset*nowIndex+offset).map((movie)=>{
                      return <Box layoutId={movie.id.toString()} variants={boxVariants} initial='normal' whileHover='hover' transition={{type:'tween'}} key={`Trending-${movie.id}`} $bgPhoto={makeImagePath(movie.backdrop_path, 'w500')} onClick={()=>onBoxClicked(movie.id)}>
                        <Info variants={infoVariants}>
                          <h4>{movie.title}</h4>
                        </Info>
                      </Box>
                    })}
                  </Row>
                </AnimatePresence>
              <ArrRight onClick={()=>increaseIndex(nowPlayingData,setNowIndex)}>{'>'}</ArrRight>
            </RowWrap>
          </Slider>

          <Slider>
            <h3>Top Rated</h3>
            <RowWrap>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving} key={topIndex} >
                  <Row variants={rowVariants} initial='hidden' animate='visible' exit='exit' transition={{type:'tween', duration:1}} key={topIndex}>
                    {topRatedData?.results.slice(offset*topIndex, offset*topIndex+offset).map((movie)=>{
                      return <Box layoutId={movie.id.toString()} variants={boxVariants} initial='normal' whileHover='hover' transition={{type:'tween'}} key={`top-rated-${movie.id}`} $bgPhoto={makeImagePath(movie.backdrop_path, 'w500')} onClick={()=>onBoxClicked(movie.id)}>
                        <Info variants={infoVariants}>
                          <h4>{movie.title}</h4>
                        </Info>
                      </Box>
                    })}
                  </Row>
                </AnimatePresence>
              <ArrRight onClick={()=>increaseIndex(topRatedData,setTopIndex)}>{'>'}</ArrRight>
            </RowWrap>
          </Slider>


          <Slider>
            <h3>Coming</h3>
            <RowWrap>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving} >
                  <Row variants={rowVariants} initial='hidden' animate='visible' exit='exit' transition={{type:'tween', duration:1}} key={upcomingDataIndex}>
                    {upcomingData?.results.slice(offset*upcomingDataIndex, offset*upcomingDataIndex+offset).map((movie)=>{
                      return <Box layoutId={movie.id.toString()} variants={boxVariants} initial='normal' whileHover='hover' transition={{type:'tween'}} key={`Coming-${movie.id}`} $bgPhoto={makeImagePath(movie.backdrop_path, 'w500')} onClick={()=>onBoxClicked(movie.id)}>
                        <Info variants={infoVariants}>
                          <h4>{movie.title}</h4>
                        </Info>
                      </Box>
                    })}
                  </Row>
                </AnimatePresence>
              <ArrRight onClick={()=>increaseIndex(upcomingDataIndex,setupcomingDataIndex)}>{'>'}</ArrRight>
            </RowWrap>
          </Slider>



          <AnimatePresence>
            {bigMovieMatch? 
            <Overlay onClick={onOverlayClick} exit={{opacity:0}} animate={{opacity:1}}>
              <Modal layoutId={bigMovieMatch.params.movieId}>
              {clickedMovie && <>
              <ModalCover style={{backgroundImage:`linear-gradient(to bottom, transparent, #2F2F2F), url(${makeImagePath(clickedMovie.backdrop_path, 'w500')})`}}/>
              <ModalTitle>{clickedMovie.title}</ModalTitle>
              <ModalOverview>평점: {clickedMovie.vote_average.toFixed(1)}</ModalOverview>
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