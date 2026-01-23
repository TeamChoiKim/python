import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";
import "@/list.css"
import List from "./List.jsx"
import Create from "./Create.jsx"
import Detail from "./Detail.jsx"
import Update from "./Update.jsx"
import { NotFound, Footer } from "./Not_Footer.jsx"

const Nav = () => {
  
  const menu = [
    {path: "/new", lable:"Create"},
    {path: "/detail", lable:"Detail"},
    {path: "/edit", lable:"Update"},
    {path: "/404", lable:"404"},
  ]

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">HOME</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {
              menu.map((v,i)=>(
                <li key={i} className="nav-item">
              <a className="nav-link" href={v.path}>{v.lable}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

const App = () => {
  const paths = [
    {path: "/", element: <List />},
    {path: "/new", element: <Create />},
    {path: "/detail", element: <Detail />},
    {path: "/edit", element: <Update />},
    {path: "*", element: <NotFound />},
  ]
  return (
    <>
      <Nav />
      <div className="container-fluid mt-3" style={{minHeight: '50vh'}}>
        <BrowserRouter>
          <Routes>
            {
              paths?.map((v, i) => <Route key={i} path={v.path} element={v.element} />)
            }
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}
export default App
