import React from "react";
import MainDoc from "./components/MainDoc"
import NavBar from "./components/NavBar"
import {Content, Creator} from "./components/Content"

export default function Rendering() {
  return (
    <div>
      
      <NavBar/>
      <MainDoc/>
      <Content/>
      <Creator/>

    </div>
  )
}

// import ReactDOM from "react-dom/client"
// import Header  from "./Header";
// import MainContent from "./MainContent";

// export default function App() {
//   return (
//     <div>
//       <Header/>
//       <MainContent/>
//     </div>
//   )
// }


