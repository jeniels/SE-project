import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import axios from "axios";

export default function CompanyLogin() {
  const [company, setCompany] = useState({
    companyName: "",
    headline: "",
    description: "",
    companyWebsite: "",
    number: "",
    image: "",
    benefits: "",
    locations: "",
    companySize: "",
    companyType: "",
    ceo: {
      name: "",
      description: "",
    },
    culture: {
      title: "",
      description: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value,
    }));
  };

  const handleCeoChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      ceo: {
        ...prevCompany.ceo,
        [name]: value,
      },
    }));
  };

  const handleCultureChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      culture: {
        ...prevCompany.culture,
        [name]: value,
      },
    }));
  };

  const formatCompanyData = (data) => {
    return {
      name: data.companyName,
      tagline: data.headline,
      email: data.email,
      number: data.number,
      website: data.companyWebsite,
      description: data.description,
      location: data.locations,
      image: data.image,
      benefits: data.benefits,
      size: data.companySize,
      type: data.companyType,
      ceo_name: data.ceo.name,
      ceo_description: data.ceo.description,
      culture_title: data.culture.title,
      culture_description: data.culture.description,
    };
  };

  // let data = '{\r\n    "name":"NMB",\r\n    "tagline":"HIHFAI",\r\n    "email":"abcd@gmail.com",\r\n    "number":"9876543210",\r\n    "website":"asjnajkscnma",\r\n    "description":"akjs,mnaklsdjajowilkj",\r\n    "location":"Mumbai",\r\n    "image":"asnaklsm",\r\n    "benefits":"akjsnakjs,naksjldkanmwlskj",\r\n    "size":"50",\r\n    "type":"Technical",\r\n    "ceo_name":"bvnc",\r\n    "ceo_description":"asjnajskcma",\r\n    "culture_title":"aksj,aiwdlkjma",\r\n    "culture_description":"askjdoiwaldjaicn aca"\r\n}';
  const createCompany = (data) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://codeshashtra-x-backend.vercel.app/api/company/profile/create",
      headers: {},
      data: formatCompanyData(data),
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the company data to your backend or perform any other actions
    console.log("Company data:", company);
    createCompany(company);
    // Reset the form after submission
    setCompany({
      companyName: "",
      headline: "",
      companyWebsite: "",
      contact_number: "",
      description: "",
      image: "",
      benefits: "",
      locations: "",
      companySize: "",
      companyType: "",
      ceo: {
        name: "",
        description: "",
      },
      culture: {
        title: "",
        description: "",
      },
    });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 py-10">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Label htmlFor="company-name">Company Name</Label>
          <Input
            id="company-name"
            name="companyName"
            value={company.companyName}
            onChange={handleChange}
            required
          />
          <div className="space-y-4">
            <Label htmlFor="company-name">Company Website</Label>
            <Input
              id="company-website"
              name="companyWebsite"
              value={company.companyWebsite}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="headline">Headline</Label>
            <Input
              id="headline"
              name="headline"
              value={company.headline}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="headline">Contact Number</Label>
            <Input
              id="contact_number"
              name="number"
              value={company.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={company.description}
              onChange={handleChange}
              placeholder="Enter a brief overview of your company"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                className="flex-1"
                id="image"
                name="image"
                value={company.image}
                onChange={handleChange}
                type="url"
              />
              {/* <Button>Upload</Button> */}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="benefits">Benefits</Label>
            <Textarea
              id="benefits"
              name="benefits"
              value={company.benefits}
              onChange={handleChange}
              placeholder="Enter the benefits of your company"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="locations">Locations</Label>
            <Input
              id="locations"
              name="locations"
              value={company.locations}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-size">Company Size</Label>
            <Input
              id="company-size"
              name="companySize"
              value={company.companySize}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-type">Company Type</Label>
            <Input
              id="company-type"
              name="companyType"
              value={company.companyType}
              onChange={handleChange}
              required
            />
          </div>

          <Card>
            <CardHeader>
              <div>
                <UserIcon className="" />
              </div>
              <div>CEO</div>
            </CardHeader>
            <CardContent>
              <Label htmlFor="ceo-name">Name</Label>
              <Input
                id="ceo-name"
                name="name"
                value={company.ceo.name}
                onChange={handleCeoChange}
                required
              />
              <Label htmlFor="ceo-description">Description</Label>
              <Textarea
                id="ceo-description"
                name="description"
                value={company.ceo.description}
                onChange={handleCeoChange}
                placeholder="Enter the description for the CEO"
                required
              />
            </CardContent>
          </Card>
          {/* Card for Culture */}
          <Card>
            <CardHeader>
              <div>
                <UsersIcon className="" />
              </div>
              <div>Culture</div>
            </CardHeader>
            <CardContent>
              <Label htmlFor="culture-title">Title</Label>
              <Input
                id="culture-title"
                name="title"
                value={company.culture.title}
                onChange={handleCultureChange}
                required
              />
              <Label htmlFor="culture-description">Description</Label>
              <Textarea
                id="culture-description"
                name="description"
                value={company.culture.description}
                onChange={handleCultureChange}
                placeholder="Enter the description for the culture"
                required
              />
            </CardContent>
          </Card>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
