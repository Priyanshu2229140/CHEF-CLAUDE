import './App.css';
import Header from './Header';
import Maincontainer from './Maincontent';
import data from './data';

function Page() {
  const entryElements = data.map((entry, index) => (
    <Maincontainer
      key={index} // Ensure each element has a unique key
      img={entry.img}
      title={entry.title}
      country={entry.country}
      date={entry.date}
      link={entry.link}
      text={entry.text}
    />
  ));

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  );
}

export default Page;
