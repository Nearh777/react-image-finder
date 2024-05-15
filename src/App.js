import { React, Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// import {NotificationContainer} from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// import fetchImages from "./servises/fetchImages";
import Searchbar from 'components/Searchbar';
import ImageGallery from "components/ImageGallery";
// import ImageGalleryItem from "components/ImageGalleryItem";
import './App.scss';



class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
  };

 

  handleQuerySubmit = query => {
    this.setState({ query });
  };

  // function fetchImages(query, page = 1) {
  // fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`)
  // .then(res => res.json())
  // }

  render() {
    // const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleQuerySubmit} />
        <ImageGallery query={this.state.query} />
        {/* <ImageGallery images={images} /> */}
        <ToastContainer autoClose = {2000}/>
        {/* <NotificationContainer /> */}
      </div>
    );
  }
}

export default App;
