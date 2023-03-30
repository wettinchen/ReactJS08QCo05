import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  
  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content />
      <Footer />
    </div>
  );
}
 
Header.defaultProps = {
  title: "Default Title"
};

export default App;
