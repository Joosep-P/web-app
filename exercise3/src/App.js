
import StuffOut from './components/StuffOut';
import data from './data.json'
import React from 'react';



class App extends React.Component {
  constructor(props)
  {
  super(props);
  this.state = {
  searchBarInputStream: "",
  items: data.items,
  
    }
  }

  onSearchStateEditi = (event) => {

    this.setState({ productSearchString: event.target.value });
  }


  render()
  {
    let output =
  <>
  <div>
   Search <input type="text" onChange={ this.onSearchStateEdit } value={ this.state.searchBarInputStream }/>
    </div >
    <StuffOut 
   items={ this.state.items.filter((item) => item.name.includes(this.state.searchBarInputStream)) }
     />
     </>



    return (
      <>
        { output }
      </>
    )
  }
}

export default App;