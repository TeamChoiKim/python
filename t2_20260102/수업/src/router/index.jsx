// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "@pages/NotFound.jsx"
import Page1 from "@pages/Page1.jsx"
import Page2 from "@pages/Page2.jsx"
import Page3 from "@pages/Page3.jsx"
// import Page4 from "@pages/Page4.jsx"
import Page5 from "@pages/Page5.jsx"


const Router = () =>{
  return (
   <BrowserRouter>
   <Routes>
    <Route path ="/page1" element={<Page1 />} />
    <Route path ="/page2" element={<Page2 />} />
    <Route path ="/page3" element={<Page3 />} />
    {/* <Route path ="/page4" element={<Page4 />} /> */}
    <Route path ="/page5" element={<Page5 />} />
    <Route path ="/" element={<NotFound />} />
   </Routes>
   </BrowserRouter>
  )
}
  export default Router