import React, { useState, useEffect } from "react";
import Profile from "./userprofilesteps/Profile";
import Education from "./userprofilesteps/Education";
import Projects from "./userprofilesteps/Project";
import Experience from "./userprofilesteps/Experience";
import Extras from "./userprofilesteps/Extras";
import axios from "axios";

const mapData = (data) => {
  return {
    first_name: data.firstname,
    last_name: data.lastname,
    email: data.email,
    number: data.phone,
    portfolio: data.website,
    github: data.github,
    linkedin: data.linkedin,
    twitter: data.twitter,
    college_name: data.college,
    clg_start_year: parseInt(data.fromyear1),
    clg_end_year: parseInt(data.toyear1),
    degree: data.qualification1,
    school_name: data.school,
    school_start_year: parseInt(data.fromyear2),
    school_end_year: parseInt(data.toyear2),
    school_board: data.qualification2,
    skills: [
      data.skill1,
      data.skill2,
      data.skill3,
      data.skill4,
      data.skill5,
      data.skill6,
    ].filter((skill) => skill !== ""),
    projects: [
      {
        project_name: data.title1,
        project_description: data.projectDescription1,
        project_link: data.link1,
      },
      {
        project_name: data.title2,
        project_description: data.projectDescription2,
        project_link: data.link2,
      },
      {
        project_name: data.title3,
        project_description: data.projectDescription3,
        project_link: data.link3,
      },
    ].filter((project) => project.project_name !== ""),
    interests: [
      data.interest1,
      data.interest2,
      data.interest3,
      data.interest4,
      data.interest5,
      data.interest6,
    ].filter((interest) => interest !== ""),
    experiences: [
      {
        company_name: data.institute1,
        position: data.position1,
        duration: data.duration1,
        description: data.experienceDescription1,
      },
      {
        company_name: data.institute2,
        position: data.position2,
        duration: data.duration2,
        description: data.experienceDescription2,
      },
    ].filter((experience) => experience.company_name !== ""),
  };
};

// createUser({
//   first_name: "Ashish",
//   last_name: "Shukla",
//   email: "ashshu763@gmail.com",
//   number: "9987946253",
//   portfolio: "adkjbvaefdkm",
//   github: "akdjbvakcma",
//   linkedin: "sjdnvakl",
//   twitter: "kjsdznc",
//   college_name: "DJSCE",
//   clg_start_year: 2021,
//   clg_end_year: 2025,
//   degree: "BE",
//   school_name: "TVM",
//   school_start_year: 2019,
//   school_end_year: 2021,
//   school_board: "HSC",
//   skills: ["C++", "Node.js"],
//   projects: [
//     {
//       project_name: "ABC",
//       project_description: "akj,mnczcna",
//       project_link: "aj,smnca,skm,casc",
//     },
//     {
//       project_name: "XYZ",
//       project_description: "sjdj,naaekdnzcna",
//       project_link: "sdjhfbieskjdncasc",
//     },
//   ],
//   interests: ["backend", "frontend"],
//   experiences: [
//     {
//       company_name: "HIJ",
//       postition: "SDE",
//       duration: "2 months",
//       description: "aksnalknsa",
//     },
//     {
//       company_name: "POI",
//       postition: "SDE",
//       duration: "6 months",
//       description: "aksnaahjfabklknsa",
//     },
//   ],
// });

const Resume = ({ user }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const save = () => {
    // createUser(formData);
  };

  return (
    <div>
      {step === 1 && (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Profile
              nextStep={nextStep}
              handleChange={handleChange}
              values={formData}
              save={save}
            />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Education
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={formData}
              save={save}
            />
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="App mt-3">
          <div className="container col-lg-8 mx-auto text-center">
            <Projects
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={formData}
              save={save}
            />
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Experience
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={formData}
              save={save}
            />
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center">
            <Extras
              prevStep={prevStep}
              handleChange={handleChange}
              values={formData}
              save={save}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
