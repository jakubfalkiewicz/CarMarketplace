import './App.css';
import CarsList from './CarsList';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className="header">
          <div className='header-left'>
            <div className='logo'></div>
            <div className='market'>
              CarMarket
            </div>
          </div>
          
          <div className='navbar'>
            <div>Cars</div>
            <div>Sellers</div> 
            <div>Home</div>
          </div>
        </header>
        <div className='cont'>
          <div className="filters">
            <div>
              Filters
            </div>
            <div>
              Sort
            </div>
          </div>
          <div className='content'>
            <CarsList/>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div>
          Tel: 999888777
        </div>
      </footer>
    </div>
  );
}

export default App;
