import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="textutil"/>
      <div className="container" my-3>
      <TextForm heading1="Enter your text here" heading2="and here is your output ..." button1="ALL CAPITAL" button2 = "all small"/>
      </div>
    </>
  );
}

export default App;
