import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/Home.page"
import AboutPage from "./pages/About.page"
import DashboardPage from "./pages/Dashboard.page"
import SignInPage from "./pages/SignIn.page"
import SignUpPage from "./pages/SignUp.page"
import ProjectsPage from "./pages/Projects.page"
import Header from "./components/Header.component"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
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
