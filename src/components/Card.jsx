import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  // console.log(data);
  const {
    _id,
    companyLogo,
    title,
    postedBy,
    location,
    employment_type,
    min_salary,
    max_salary,
    posting_date,
    description,
  } = data;
  const postingDate = new Date(posting_date);
  const formattedDate = `${postingDate.getDate()}-${
    postingDate.getMonth() + 1
  }-${postingDate.getFullYear()}`;

  return (
    <div>
      <section className="card">
        <Link
          to={`/jobs/${_id}`}
          className="flex gap-4 flex-col sm:flex-row items-start"
        >
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714608000&semt=sph"
            alt={title}
            className="cover w-16 h-16 mb-4"
          />
          <div className="card-details">
            <h4 className="text-primary mb-1">{postedBy?.name}</h4>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>

            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-2">
                <FiMapPin /> {location}
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> {employment_type}
              </span>
              <span className="flex items-center gap-2">
                <FaIndianRupeeSign /> {min_salary}-{max_salary}k
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar /> {formattedDate}
              </span>
            </div>

            <p className="text-base text-primary/70 ">
              {description.slice(0, 200)}
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
