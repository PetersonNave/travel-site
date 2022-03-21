import './App.css';
import{ React} from 'react';
import Header from './components/header';
import Footer from './components/footer'
import BannerHome from './Screens/Home';
import Recomended from './components/Recomended';
import CardComponent from './components/cards';
//icons
import bestPrice from './src/icons/bestPrice.svg';
import covidIco from './src/icons/covidIco.svg';
import card from './src/icons/card.svg';
import person from './src/icons/person.svg';




const Card = [
  {Icon: bestPrice,
   Title: "Get Best Prices",
   Description: "Pay through our application and save thousands and get amazing rewards"
  },
  {Icon: covidIco,
   Title: "Covid Safe",
   Description: "We have the curated hotels that have all the precaution for a covid safe environment"
  },
  {Icon: card,
   Title: "Flexibe Payment",
   Description: "Enjoy the flexible payment through our app and get rewards on every payment"
  },
  {Icon: person,
   Title: "Find The Best Near You",
   Description: "Find the best hotels and places to visit near you in a single click"
  },
];
function App() {

  
  
  
  return (
    <div className="App">
     <Header/>   
      <BannerHome/> 
      <div className='cardsArea'>
      <div className='cards'>
        {Card.map((item, key)=>
        <div className='cardCont'>
          <CardComponent Description={item.Description} icon={item.Icon} title={item.Title} key={key}/>
          </div>
         )}
      </div>   
      </div>
      <Recomended/>
      <Footer/>
    </div>
  );
}

export default App;
