import Navbar from "./components/Navbar";
import Input_box from './components/inputbox';
// import ALLCAPS from './components/ALLCAPS';


function App() {
  return (
    <>
      <Navbar title="textutil" dropdown_head="utilities" dropdown_1="ALL_CAPS" dropdown_2="all_small" dropdown_3="MoCkErY" />
      <div className="container" my-3>
        <Input_box heading1="Enter your text here" heading2="and here is your output ..." button1="ALL CAPITAL" button2="all small" />
      </div>
      {/* <div className="container" my-3>
        <ALLCAPS button1="ALL_CAPS"/>
      </div> */}
    </>
  )
};

export default App;
