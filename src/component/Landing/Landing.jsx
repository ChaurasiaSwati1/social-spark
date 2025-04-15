import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-sm-12 text-center py-5">
            <Link to="/services"
              className="btn btn-yellow"
              aria-label="services"
            >
              Go To services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
