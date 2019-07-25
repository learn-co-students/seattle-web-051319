import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaintingsList from './PaintingsList';
import PaintingsNew from './PaintingsNew';
import PaintingShow from './PaintingShow';
import { api } from '../services/api';

class PaintingsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/login');
    } else {
      api.auth.getCurrentUser().then(user => {
        if (user.error) {
          this.props.history.push('/login');
        } else {
          api.paintings.getPaintings().then(data => {
            this.setState({
              paintings: data.slice(0, 20).sort((a, b) => b.votes - a.votes)
            });
          });
        }
      });
    }
  }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter(pntg => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map(pntg => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState(state => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    console.log('render method of Container', this.state);
    return (
      <div>
        <Switch>
          <Route path="/paintings/new" component={PaintingsNew} />
          <Route
            path="/paintings/:slug"
            render={props => {
              const painting = this.state.paintings.find(
                pntg => pntg.slug === props.match.params.slug
              );
              console.log('painting', painting);

              return painting ? (
                <PaintingShow painting={painting} />
              ) : (
                <h1>Loading...</h1>
              );
            }}
          />
          <Route
            path="/paintings"
            render={() => {
              return (
                <PaintingsList
                  handleDelete={this.handleDelete}
                  handleVote={this.handleVote}
                  paintings={this.state.paintings}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
