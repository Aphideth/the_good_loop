import '../styles/weartype.css';
import { NavLink as Link } from 'react-router-dom';

const Weartype = ({ weartype }) => {
  return (
    <div className="weartype">
      <div className="flex flex-col justify-center justify-items-center items-center content-center w-48 h-48 mr-5">
        <Link to={`/brands?weartype=${weartype.slug}`} key={weartype.id}>
          <img
            className="border-solid border-2 border-black rounded-full w-40 h-40 cursor-pointer"
            src={weartype.image}
            alt={weartype.name}
          />
        </Link>
        <h3>{weartype.name}</h3>
      </div>
    </div>
  );
};

export default Weartype;
