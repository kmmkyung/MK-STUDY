import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { searchMovieTv } from "../api";
import styled from "styled-components";
import Loader from "../components/Loader";

const SearchPage = styled.section`
  width: 100%;
  padding: 80px calc(3.5vw + 5px);
  margin-top: 20px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: min(2.5vw, 25px);
`;

const Item = styled.div`
  display: grid;
`;

const ItemPoster = styled.div`
  width: 100%;
  aspect-ratio: 1 / 0.57;
  box-sizing: border-box;
  border: 3px solid rgba(249, 249, 249, 0);
  border-radius: 10px;
  transition: all 0.6s;
  cursor: pointer;
  overflow: hidden;

  img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
  }
`;

const ItemTitle = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 8px;

  p{
  font-size: clamp(1.2rem, 1.2vw, 1.6rem);
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  }
`;

function Search(){
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');
  const { data, isLoading } = useQuery({queryKey:[keyword], queryFn:()=>searchMovieTv(keyword),
    select:(data)=>data.results.filter((ele) => ele.backdrop_path && ele.backdrop_path !== null)})
  
if(data){
    return (
      <>
      { isLoading ? <Loader/> : <SearchPage>
        <Wrapper>
        {data.map(function(ele,idx){
        const movieImageUrl = "https://image.tmdb.org/t/p/w500/" + ele.backdrop_path;
          return(
            <Item key={idx}>
              <ItemPoster>
                <img src={movieImageUrl} alt='movie'/>
              </ItemPoster>
              <ItemTitle>
                <p>{ ele.title || ele.name }</p>
              </ItemTitle>
            </Item>
        )})}
        </Wrapper>
      </SearchPage>}
      </>
    )
  }
}


export default Search;