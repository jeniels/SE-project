import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa6";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function ViewApplicants() {
  const { id } = useParams();
  console.log(id);
  const [job, setJob] = useState([]);
  const getApplicants = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://codeshashtra-x-backend.vercel.app/api/job/${id}/applicants`,
      headers: {},
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
  useEffect(() => {
    getApplicants();
  }, []);
  console.log(job);
  return (
    <div className="grid grid-cols-2">
      <Card className="w-full ">
        <CardHeader className="sticky top-0 bg-white z-10 dark:bg-black">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-bold">
              Applicants for Software Engineer
            </h2>
            <Badge>32 applicants</Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Here are all the applicants who have applied for the Software
            Engineer position.
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="border-t border-gray-200 dark:border-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12" />
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Alice Chang</TableCell>
                  <TableCell>alice@example.com</TableCell>
                  <TableCell>92%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Bob Johnson</TableCell>
                  <TableCell>bob@example.com</TableCell>
                  <TableCell>85%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Cindy Lee</TableCell>
                  <TableCell>cindy@example.com</TableCell>
                  <TableCell>78%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">David Kim</TableCell>
                  <TableCell>david@example.com</TableCell>
                  <TableCell>95%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">
                    Ella Rodriguez
                  </TableCell>
                  <TableCell>ella@example.com</TableCell>
                  <TableCell>88%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Frank Wright</TableCell>
                  <TableCell>frank@example.com</TableCell>
                  <TableCell>80%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Grace Smith</TableCell>
                  <TableCell>grace@example.com</TableCell>
                  <TableCell>91%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Henry Brown</TableCell>
                  <TableCell>henry@example.com</TableCell>
                  <TableCell>82%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Ivy White</TableCell>
                  <TableCell>ivy@example.com</TableCell>
                  <TableCell>89%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Jack Turner</TableCell>
                  <TableCell>jack@example.com</TableCell>
                  <TableCell>93%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Kelly Hall</TableCell>
                  <TableCell>kelly@example.com</TableCell>
                  <TableCell>87%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Leo King</TableCell>
                  <TableCell>leo@example.com</TableCell>
                  <TableCell>94%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Mia Green</TableCell>
                  <TableCell>mi@example.com</TableCell>
                  <TableCell>86%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Noah Baker</TableCell>
                  <TableCell>noah@example.com</TableCell>
                  <TableCell>90%</TableCell>
                </tr>
                <tr className="divide-y divide-gray-200 dark:divide-gray-800">
                  <TableCell className="w-12">
                    <Avatar className="m-0" />
                  </TableCell>
                  <TableCell className="font-semibold">Olivia Cook</TableCell>
                  <TableCell>olivia@example.com</TableCell>
                  <TableCell>83%</TableCell>
                </tr>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      {/* <div className="p-20">
        <div className="sticky top-10">
          <div className="my-4">
            <h2 className="text-2xl font-medium text-blue">Job details</h2>
            <p className="text-primary/75 md:w-1/3 text-sm italic my-1"></p>
          </div>

          <div className="my-4 space-y-2">
            <div className="flex items-center gap-2">
              <FaBriefcase />
              <p className="text-xl font-medium mb-2">Job type</p>
            </div>
            <button className="bg-blue px-6 py-1 text-white rounded-sm">
              {job.employmentType}
            </button>
          </div>
          <div className="">
            <h4 className="text-lg font-medium mb-3">OutLine</h4>
            <p className="text-primary/90">{job.description}</p>
          </div>
        </div>
      </div> */}
      <Component />
    </div>
  );
}

function Component() {
  return (
    <div className="mx-auto">
      <Card className="max-w-sm sticky top-10">
        <CardHeader className="">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage
                alt="zoho"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5sPMCg_J4S2r7EDfk-hvJ6yPIzLpZGepaJiGs8HZjWirk0d8"
              />
            </Avatar>
            <div>
              <CardTitle>Web Developer</CardTitle>
              <CardDescription className="text-sm">
                zoho - Full-time
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-sm">
            <p>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
              sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
              laborum tempor Lorem incididunt.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">React</Badge>
            </div>
            <div className="mt-2">
              <p className="font-medium">Location:</p>
              <p>mumbai</p>
            </div>
            <div className="mt-2">
              <p className="font-medium">Experience:</p>
              <p>No Experience Required</p>
            </div>
            <div className="mt-2">
              <p className="font-medium">Salary:</p>
              <p>$10,000 - $1,000,000,000 (Hourly)</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-xs text-gray-500">Posted on 2024-03-14</p>
          {/* <Button variant="outline">Apply</Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
