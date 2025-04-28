import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import HomeView from './components/HomeView.jsx'
function App() {

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          {/* <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/movies" element={<MoviesView />}>
              <Route path="now_playing" element={<MovieTileView />}></Route>
              <Route path="popular" element={<MovieTileView />}></Route>
              <Route path="top_rated" element={<MovieTileView />}></Route>
              <Route path="upcoming" element={<MovieTileView />}></Route>
              <Route path=":id" element={<MovieDetailView />}></Route>
              <Route path="cart" element={<CartView />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<ErrorView />} /> */}
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App;
