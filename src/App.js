import Header from './components/Header/Header';
import Content from './components/Content/Content.jsx';
import Personalized_product from './components/Personalized_product/Personalized_product';
import Footer from './components/Footer/Footer';
import './globle.scss'
function App() {
  return (
    <>
      <div className="git_link">
        <a href="http://www.github.com/kaushalbro/amazon"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
      </div>
      <Header />
      <Content />
      <Personalized_product />
      <Footer />
    </>
  )
}
export default App;
