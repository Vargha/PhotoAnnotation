import './App.css';
// https://github.com/michaeldzjap/react-signature-pad-wrapper
import SignaturePad from 'react-signature-pad-wrapper';
import Layout from "./Layout";
import Simple from "./Simple";

function App() {
  const sigPad = <div className="App">
    <Layout/>
    {/*<SignaturePad*/}
    {/*  redrawOnResize={true}*/}
    {/*  width={500}*/}
    {/*  height={500}*/}
    {/*  options={{*/}
    {/*    minWidth: 5,*/}
    {/*    maxWidth: 10,*/}
    {/*    penColor: 'rgb(66, 133, 244)',*/}
    {/*  }}*/}
    {/*/>*/}
  </div>;

  const imageAnn = <div className="App">
    <Simple/>
  </div>;

  const output = imageAnn;

  return (
    output
  );
}

export default App;
