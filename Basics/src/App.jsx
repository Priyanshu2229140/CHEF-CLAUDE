import './App.css'
import { createRoot } from "react-dom/client";
import Header from './Header';
import Main from './Maincontent';
//import Footer from './Footer';

const root = createRoot(document.getElementById("root"));
function Page(){
  return(
    <>
      <Header/>
      <Main/>
      {/* <Footer/> */}
    </>
  );
}
root.render(<Page />);
export default Page;