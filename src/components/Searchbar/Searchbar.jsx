import { React, Component } from 'react';
import { toast } from 'react-toastify';
// import { cssTransition } from 'react-toastify';
// import "animate.css/animate.min.css";
// import 'react-toastify/dist/ReactToastify.min.css';

// import {NotificationManager} from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
import IconButton from '../IconButton';
import { ReactComponent as SearchIcon } from '../../icons/codescan-checkmark-small.svg';
import './Searchbar.scss';



// const swirl = cssTransition({
//   enter: "swirl-in-fwd",
//   exit: "swirl-out-bck"
// });

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      // NotificationManager.error('Enter your query!', 'Error!', 2000);
      toast.error('Enter your query!', {
        
        theme: 'colored',
        
      });
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    
  };

  render() {
    const {query} = this.state;
    return (
      <header className="Searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <IconButton type="submit" className="form-button">
            <span className="button-label">
              <SearchIcon width="30" height="30" fill="#444" />
            </span>
          </IconButton>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
