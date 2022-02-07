import { NavLink as Link } from 'react-router-dom';
import '../styles/brandCard.css';

const BrandCard = ({ brand }) => {
  // return brand.criterias.animal === 5 ||
  //   brand.criterias.environnement === 5 ||
  //   brand.criterias.humain === 5 ? (
  //   <div className="brandcard">
  //     <div className="flex flex-col justify-center justify-items-center items-center content-center">
  //       <img
  //         className="border-solid border-2 border-black rounded-full w-48 h-48"
  //         src={brand.image}
  //         alt={brand.name}
  //       />
  //       {/* <span className={criterias${brand.criterias.animal}}></span> */}
  //       <h3>{brand.name}</h3>
  //     </div>
  //   </div>
  // ) : null;
  return (
    <div className="brandcard">
      <div className="flex flex-col justify-center justify-items-center items-center content-center w-48 h-48 mr-5">
        <Link to={`/brands/${brand.slug}`} key={brand.id}>
          <img
            className="border-solid border-2 border-black rounded-full w-40 h-40 cursor-pointer"
            src={brand.image}
            alt={brand.name}
          />
        </Link>
        {/* <span className={criterias${brand.criterias.animal}}></span> */}
        <h3>{brand.name}</h3>
      </div>
    </div>
  );
};

export default BrandCard;
