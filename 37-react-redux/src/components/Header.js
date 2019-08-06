import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SEC'
    }
  }

  updateTitle = () => {
    this.state.title === 'TCF' ? this.setState({title: 'SEC'}) : this.setState({title: 'TCF'})
  }

  render() {
    return (
      <header className="App-header">
        <div onClick={this.updateTitle}>
          {this.state.title} Tally
        </div>
      </header>
    )
  }
}

export default Header;
