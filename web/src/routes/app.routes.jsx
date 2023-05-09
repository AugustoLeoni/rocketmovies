import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';
import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/create-movie' element={<CreateMovie />} />
      <Route path='/movie-preview/:id' element={<MoviePreview />} />
    </Routes>
  )
}