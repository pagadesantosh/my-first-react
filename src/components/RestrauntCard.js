import {IMG_CDN_URL}  from '../config';

const RestrauntCard = (props) => {
    const {name, cuisines, cloudinaryImageId, totalRatings, avgRating} = props;
    return (
        <div className="col-lg-4 col-md-6 col-12">
        <div className="menu-thumb">
          <div className="menu-image-wrap">
            <img
              src={IMG_CDN_URL + cloudinaryImageId}
              className="img-fluid menu-image"
              alt=""
            />
            <span className="menu-tag bg-warning">{cuisines.join(", ")}</span>
          </div>
          <div className="menu-info d-flex flex-wrap align-items-center">
            <h4 className="mb-0">{name}</h4>
            <span className="price-tag bg-white shadow-lg ms-4">
              <small>&#8377;</small>12.50
            </span>
            <div className="d-flex flex-wrap align-items-center w-100 mt-2">
              <h6 className="reviews-text mb-0 me-3">{avgRating}/5</h6>
              <div className="reviews-stars">
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star reviews-icon"></i>
              </div>
              <p className="reviews-text mb-0 ms-4">{totalRatings} Reviews</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default RestrauntCard;
