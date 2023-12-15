import GlobalStyles from "./GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import Topics from "./components/Topics";


function App() {

  return (
    <div className="App">
      <GlobalStyles />
     <Header />
     <Topics />
    <Post />
    <Footer />
    </div>
  );
}

export default App;
