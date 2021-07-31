import YaziListesi from './Components/YaziListesi';
import YaziDetayi from './Components/YaziDetayi';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import YaziEkle from './Components/YaziEkle';
import YaziDuzenle from './Components/YaziDuzenle';


function App() {

  return (
    <Router>
      <div className="main_wapper">
        <header> </header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" exact component={YaziDetayi} />
          <Route path="/yaziekle" component={YaziEkle} />
          <Route path="/posts/:id/edit" component={YaziDuzenle} />
        </div>
      </div>
    </Router>

  );
}

export default App;
