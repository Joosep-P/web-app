import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';


class App extends React.Component {
  constructor(props)
  {
    
    super(props);

    this.state = {
      items: [
        { id: 1,
         value: 'Petrol', 
         qty: 5, 
         unit: 'ltr'
         },
      ]
    };
    
  }


  addProduct = (productDescription, quantity) => {
    
    return () => {

      const searchResult = this.state.items.findIndex((element) => {
          if(element.value === productDescription){
            return true;
          }else{
            return false;
          }
      });
      
      if(searchResult !== -1) {
        let newItems = [...this.state.items];
        newItems[searchResult].qty += quantity;
        this.setState({items: newItems});
      
      }
      else{
        this.setState({
          items:

          [...this.state.items,
            {
              id: this.state.items.lenght +1,
              value: productDescription, qty: quantity
            }
          
          ]
        });
      }
    }  
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } / >
      <button onClick={  this.addProduct('Vodka', 1)}>ADD Vodka</button>
      <button onClick={  this.addProduct('Candy', 1)}>ADD Candy</button>
      <button onClick={  this.addProduct('Melon', 1)}>ADD Melon</button>
      <button onClick={  this.addProduct('Apple', 1)}>ADD Apple</button>

    </div>
  }
}

export default App;