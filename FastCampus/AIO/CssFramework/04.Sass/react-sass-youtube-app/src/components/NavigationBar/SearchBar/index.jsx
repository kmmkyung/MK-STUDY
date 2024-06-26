import React from "react";
import {ImSearch} from 'react-icons/im'
import {MdKeyboardVoice} from 'react-icons/md'
const SearchBar = () =>{
  return(
    <div className="SearchBar">
      <form>
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">
          <ImSearch size={20}></ImSearch>
        </button>
      </form>
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25}></MdKeyboardVoice>
      </button>
    </div>
  )
}

export default SearchBar