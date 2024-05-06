import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { useParams } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Check } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [job, setJob] = useState([]);
  const [applied, setApplied] = useState(false);

  const getJob = (id) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://codeshashtra-x-backend.vercel.app/api/job/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setJob(response.data.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getJob(id);
  }, []);

  const handleJobApply = async () => {
    // let data = '{\r\n    "userId":"6607fcb1ea0e014ad0028857",\r\n    "jobId":"660809f482ac3e050917d4be"\r\n}';
    let data = {
      userId: "66085c0b714579380daa8b89",
      jobId: id,
    };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://codeshashtra-x-backend.vercel.app/api/user/job/apply",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        Swal.fire("Application Submited Successfully!", "", "success");
        console.log(JSON.stringify(response.data));
        setApplied(true);
      })
      .catch((error) => {
        console.log(error);
      });

    // // console.log("btn clicked")
    // const { value: url } = await Swal.fire({
    //   input: "url",
    //   inputLabel: "CV or Resume URL address",
    //   inputPlaceholder: "Enter the URL",
    // });
    // if (url) {
    //   Swal.fire(`Entered URL: ${url}`).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //     } else if (result.isDenied) {
    //       Swal.fire("Changes are not saved", "", "info");
    //     }
    //   });
    // }
  };

  const postingDate = new Date(job?.posting_date);
  const formattedDate = `${postingDate.getDate()}-${
    postingDate.getMonth() + 1
  }-${postingDate.getFullYear()}`;

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* <PageHeader title={"Job Details Page"} path={"Single Job"} /> */}

      <div className="mt-10">
        <h3 className="font-semibold mb-2">Job ID: {parseInt(id)}</h3>

        <img
          src={job?.postedBy?.image}
          alt={job?.title}
          className="cover h-32 mb-4"
        />
        <div className="my-4">
          <h2 className="text-2xl font-medium text-blue">{job?.title}</h2>
          <p className="text-primary/75 md:w-1/3 text-sm italic my-1">
            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-2">
                <FiMapPin /> {job?.location}
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> {job?.employment_type}
              </span>
              <span className="flex items-center gap-2">
                <FiDollarSign /> {job?.min_salary}-{job?.max_salary}k
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar /> {formattedDate}
              </span>
            </div>
          </p>
        </div>

        <div className="my-4 space-y-2">
          <div className="flex items-center gap-2">
            <FaBriefcase />
            <p className="text-xl font-medium mb-2">
              Job type: {job?.experience_level}
            </p>
          </div>
          <button className="bg-blue-500 px-6 py-1 h-6 flex justify-center items-center rounded-full text-white ">
            {job?.employment_type}
          </button>
          {applied ? (
            <button
              className="bg-green-700 px-6 py-1 flex  text-white rounded-sm "
              onClick={handleJobApply}
            >
              Applied <Check className="ml-2" />
            </button>
          ) : (
            <button
              className="bg-indigo-700 px-6 py-1 text-white rounded-sm "
              onClick={handleJobApply}
            >
              Apply Now
            </button>
          )}
        </div>

        {/* job details */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mt-12">
          <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">Benefits</h4>
            <p className="text-sm text-primary/70 mb-2">
              Pulled from the full job description
            </p>
            <ul className="list-disc list-outside text-primary/90 space-y-2 text-base">
              {job?.postedBy?.benefits
                .split(".")
                .slice(0, -1)
                .map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item.trim()}
                  </li>
                ))}
            </ul>
          </div>

          <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">OutLine</h4>
            <p className="text-primary/90">{job?.description}</p>
          </div>
          <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">Future Growth</h4>
            <h2 className="text-lg font-medium mb-3">{job?.postedBy?.name}</h2>
            <h4 className="text-lg font-medium mb-3">
              {job?.postedBy?.tagline}
            </h4>

            <p className="text-primary/90">{job?.postedBy?.description}</p>
          </div>
        </div>

        <div className="text-primary/75 my-5 space-y-3">
          <h4 className="text-lg font-medium ">Company Culture</h4>
          <h2>
            {job?.postedBy?.culture_title?.split(",").map((item, index) => (
              <span
                className="bg-blue-500 rounded-full text-white p-1 px-3 mr-4"
                key={index}
              >
                {item.trim()}
              </span>
            ))}
          </h2>
          <p>{job?.postedBy?.culture_description}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
