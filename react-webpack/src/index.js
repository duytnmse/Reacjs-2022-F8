import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom/client"; // nạp thư viện react-dom

// Tạo component App
function App() {
  return (
    <>
      <div>
        <h1>Xin chào anh em F8!</h1>
      </div>
      <p>Hello ae</p>
    </>
  );
}

// Render component App vào #root element
//@React17
//ReactDOM.render(<App />, document.getElementById("root"));

//@React18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
