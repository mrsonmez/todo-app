import Header from "./components/Header/Header";
import Content from "./components/contents/Content";
import Footer from "./components/Footer/Footer";
import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
        <Footer />
      </section>
    </TodoProvider>
  );
}

export default App;
