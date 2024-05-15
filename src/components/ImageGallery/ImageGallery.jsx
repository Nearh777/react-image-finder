import { Component } from 'react';
import imagesAPI from 'servises/fetchImages';
import './ImageGallery.scss';
// import imagesAPI from '../../servises/fetchImages';

// const ImageGallery = ({ images, onClick }) => {
//     return (
//         <ul className="ImageGallery">
//         {images.map(({ id, webformatURL, largeImageURL }) => (
//             <li key={id} className="ImageGalleryItem">
//             <img
//                 src={webformatURL}
//                 alt=""
//                 className="ImageGalleryItem-image"
//                 onClick={() => onClick(largeImageURL)}
//             />
//             </li>
//         ))}
//         </ul>
//     );
//     }

// function ImageGallery({ images, onClick }) {
//     // const {id, webformatURL, largeImageURL} = images.hits.props;
//     return (
//         <ul className="ImageGallery">
//         {images.map(({ id, webformatURL, largeImageURL }) => (
//             <li key={id} className="ImageGalleryItem">
//             <img
//                 src={webformatURL}
//                 alt=""
//                 className="ImageGalleryItem-image"
//                 onClick={() => onClick(largeImageURL)}
//             />
//             </li>
//         ))}
//         </ul>
//     );
//     }




class ImageGallery extends Component {
  state = {
    images: null,
    totalImages: 0,
    query: '',
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
        
       
        
        
        
        imagesAPI.fetchImages(this.props.query).then(({hits, totalHits}) => this.setState({images: hits, totalImages: totalHits}))
            //  console.log(this.state.images)      
        
        
        // imagesAPI.fetchImages(this.props.query)
        // .then(({ hits, totalHits }) => {
        //     const images = hits.map(hit => ({
        //       id: hit.id,
        //       description: hit.tags,
        //       smallImage: hit.webformatURL,
        //       largeImage: hit.largeImageURL,
        //     }))});

            

    }
  }




  render() {
    const { images } = this.state;
    console.log(images)
    return (
      <ul className="gallery__wraper">
    
        {images && images.map(({ id, webformatURL, largeImageURL }) => (
            <li key={id} className="gallery__items">
            <img
                src={webformatURL}
                alt=""
                className="gallery__image"
                onClick={() => this.props.onClick(largeImageURL)}
            />
            </li>
        ))}
      </ul>
    //   <ul className="ImageGallery">
    //   {this.state.images.map(({ id, webformatURL, largeImageURL }) => (
    //       <li key={id} className="ImageGalleryItem">
    //       <img
    //           src={webformatURL}
    //           alt=""
    //           className="ImageGalleryItem-image"
    //           onClick={() => this.props.onClick(largeImageURL)}
    //       />
    //       </li>
    //   ))}
    //   </ul>
    );
  }
}

export default ImageGallery;



// images => this.setState({ images })