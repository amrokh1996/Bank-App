import TableData from "./components/form";
import AccountForm from "./components/accountform";
import Contact from "./components/contact";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";


function App() {
return (
	<div className="App">

<BrowserRouter>
<Header/>
      <Routes>
          <Route path="AccountForm" element={<AccountForm />} />
          <Route path="TableData" element={<TableData />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
	</div>
);
}

export default App;
