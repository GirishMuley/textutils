import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import About from "./components/About";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#102749";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // useEffect(() => {
      //   setInterval(() => {
      //     Document.title = "TextUtils is Amazing Mode";
      //   }, 2000);
      // });
      // setInterval(() => {
      //   Document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   Document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="textUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
