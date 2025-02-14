import './App.css'
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
function Header(){
  return(
    <header className='header'>
      {/* <img src="src/assets/1000183918.jpg" alt="photo" width="40px" /> */}
      <p className='header1'>Welcome To My Page</p>
      <nav>
        <ul className='nav-list'>
          <li className='list'>Pricing</li>  
          <li className='list'>About</li>
          <li className='list'>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Main(){
  return(
    <main>
      <h2 className='name'>My name is Priyanshu</h2>
      <ul>
        <li className='list1'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptates maiores debitis neque magnam dolores quidem ipsam voluptatem architecto expedita, aspernatur doloremque minima quis tempora fugit atque ex quasi. Tempore!
        </li>
        <li className='list1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla sed laboriosam id quibusdam molestias, quae soluta deleniti cum aut ab eos? Aliquam nostrum dolor ipsum laudantium nihil distinctio similique.
        </li>
      </ul>
    </main>
  );
}
function Footer(){
  return(
    <footer className='footer'>
      <h3>Thanks for visiting</h3>
    </footer>
  );
}
function Page(){
  return(
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
root.render(<Page />);
export default Page;