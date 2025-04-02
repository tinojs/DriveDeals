import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'

import Layout from './pages/layouts/Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AddCarPage from './pages/AddCarPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import AllCarsPage from './pages/AllCarsPage'
import LocationsPage from './pages/LocationsPage'
import MyProfilePage from './pages/MyProfilePage'

import Path from './paths'
import AuthGuard from './guards/Authguard'
import AuthContext from './contexts/authContext'
import CarDetailsPage from './pages/CarDetailsPage'

function App() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <>
      <Routes>
        {/* <Route path={Path.NotFound} element={<NotFoundPage />} /> */}
        <Route path={Path.Base} element={<Navigate to={isAuthenticated ? Path.Home : Path.Login} />} />
        <Route path={Path.Login} element={isAuthenticated ? <Navigate to={Path.Home} /> : <LoginPage />} />
        <Route path={Path.Register} element={isAuthenticated ? <Navigate to={Path.Home} /> : <RegisterPage />} />

        <Route element={<Layout />}>
          <Route path={Path.Home} element={<HomePage />} />
          <Route path={Path.AllCars} element={<AllCarsPage />} />
          <Route path={Path.CarDetails + '/:carId'} element={<CarDetailsPage />} />
          <Route path={Path.About} element={<AboutPage />} />
          <Route path={Path.Locations} element={<LocationsPage />} />

          <Route element={<AuthGuard />}>
            <Route path={Path.AddCar} element={<AddCarPage />} />
            <Route path={Path.MyProfile} element={<MyProfilePage />} />
          </Route>

        </Route>

      </Routes>

    </>
  )
}

export default App
