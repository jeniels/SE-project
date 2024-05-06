import { CardContent, Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CompanyDesc() {
  const { id } = useParams();
  const [data, setData] = useState({
    _id: "6608042a10c5ff72b671c6c5",
    name: "NMB",
    tagline: "HIHFAI",
    email: "abcd@gmail.com",
    number: "9876543210",
    website: "asjnajkscnma",
    description: "akjs,mnaklsdjajowilkj",
    location: "Mumbai",
    image: "asnaklsm",
    benefits: "akjsnakjs,naksjldkanmwlskj",
    size: "50",
    type: "Technical",
    ceo_name: "bvnc",
    ceo_description: "asjnajskcma",
    culture_title: "aksj,aiwdlkjma",
    culture_description: "askjdoiwaldjaicn aca",
    createdAt: "2024-03-30T12:23:06.025Z",
    updatedAt: "2024-03-30T12:23:06.025Z",
    __v: 0,
  });

  const fetchProfile = (id) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://codeshashtra-x-backend.vercel.app/api/company/profile/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProfile(id);
  }, []);

  return (
    <div className="pb-10">
      <Card className="w-full max-w-3xl mx-auto ">
        <CardContent className="p-4 md:p-6">
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full border-2">
              <img
                alt="Company logo"
                className="rounded-full object-cover"
                height="80"
                src={data.image} // <-- Use data.image here
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
            </div>
          </div>
          <div className="grid gap-1 mt-4 text-center">
            <h1 className="text-3xl font-bold">{data.name}</h1>{" "}
            {/* <-- Use data.name here */}
            <p className="text-sm font-medium leading-none tracking-wide text-gray-500 dark:text-gray-400">
              {data.tagline} {/* <-- Use data.tagline here */}
            </p>
          </div>
        </CardContent>
        <div className="border-t" />
        <CardContent className="p-4 md:p-6">
          <dl className="grid gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Contact
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.number} {/* <-- Use data.number here */}
                <br />
                <Link className="text-blue-500 underline" to={data.website}>
                  Website
                </Link>{" "}
                {/* <-- Use data.website here */}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Description
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.description} {/* <-- Use data.description here */}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Location
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.location} {/* <-- Use data.location here */}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Benefits
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.benefits} {/* <-- Use data.benefits here */}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Size
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.size} {/* <-- Use data.size here */}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Type
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.type} {/* <-- Use data.type here */}
              </dd>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                CEO
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.ceo_name}: {data.ceo_description}{" "}
                {/* <-- Use data.ceo_name and data.ceo_description here */}
              </dd>
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Culture
              </dt>
              <dd className="text-sm font-medium tracking-wide">
                {data.culture_title}: {data.culture_description}{" "}
                {/* <-- Use data.culture_title and data.culture_description here */}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
