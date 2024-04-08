import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SearchVideosPage from './pages/SearchVideosPage'
import VideoPage from './pages/VideoPage'
import NavigationBar from './components/NavigationBar'
import SideBar from './components/SideBar'

const Layout = function(){
  return(
    <>
      <NavigationBar></NavigationBar>
      <SideBar></SideBar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<MainPage></MainPage>}></Route>
          <Route path='/results/:input' element={<SearchVideosPage></SearchVideosPage>}></Route>
          <Route path='/video/:videoId' element={<VideoPage></VideoPage>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
