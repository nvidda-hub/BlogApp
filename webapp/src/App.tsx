import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About.page"
import DashboardPage from "./pages/Dashboard.page"
import SignInPage from "./pages/SignIn.page"
import SignUpPage from "./pages/SignUp.page"
import ProjectsPage from "./pages/Projects.page"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/Dashboard' element={<DashboardPage />}/>
          <Route path='/sign-in' element={<SignInPage />}/>
          <Route path='/sign-up' element={<SignUpPage />}/>
          <Route path='/projects' element={<ProjectsPage />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
