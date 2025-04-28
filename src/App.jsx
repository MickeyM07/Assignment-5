import { useState } from 'react'; 
import './App.css';
import HomeView from './Views/HomeView.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './store/StoreProvider'; 
function App() {

  return (
    // <StoreProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<HomeView />} />
    //       {/* <Route path="/login" element={<LoginView />} />
    //       <Route path="/register" element={<RegisterView />} />
    //       <Route element={<ProtectedRoutes />}>
    //         <Route path="/movies" element={<MoviesView />}>
    //           <Route path="now_playing" element={<MovieTileView />}></Route>
    //           <Route path="popular" element={<MovieTileView />}></Route>
    //           <Route path="top_rated" element={<MovieTileView />}></Route>
    //           <Route path="upcoming" element={<MovieTileView />}></Route>
    //           <Route path=":id" element={<MovieDetailView />}></Route>
    //           <Route path="cart" element={<CartView />}></Route>
    //         </Route>
    //       </Route>
    //       <Route path="*" element={<ErrorView />} /> */}
    //     </Routes>
    //   </BrowserRouter>
    // </StoreProvider>
    <></>
  )
}

export default App;
