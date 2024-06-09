// import imageElement from "/images/camera_1.jpg";

/* eslint-disable react/prop-types */

const ProductCard = ({ productData }) => {
 
  return (
    <>
      {productData.map((currElem) => { 
        //  var txt = currElem.price;
        // var numb = txt.match(/\d/g);
        // numb = numb.join("");
        // console.log(numb);
        return (
          <div key={currElem.id}>
            <div className="card">
              <div className="row">
                <div className="col-md-3">
                  <span className="badge text-bg-danger">{currElem.id}</span>
                </div>
                <div className="col-md-9">
                  <span className="badge text-bg-warning float-end">
                    {currElem.category}
                  </span>
                </div>
              </div>
              <img src={currElem.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> {currElem.name}</h5>
                <p className="card-text">{currElem.description}</p>
                <a href="#" className="btn btn-primary">
                 Rs.  {currElem.price}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
