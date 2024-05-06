import React, { Component } from "react";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // Initialize state properties for project titles, links, and descriptions
      title1: "",
      link1: "",
      projectDescription1: "",
      title2: "",
      link2: "",
      projectDescription2: "",
      title3: "",
      link3: "",
      projectDescription3: "",
    };
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  save = (e) => {
    const promise = this.props.save();
    promise
      .then((res) => {
        if (res.status === 200) {
          this.setState((prevState) => ({
            open: true,
          }));
        }
      })
      .catch((err) => console.log(err));
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState((prevState) => ({
      open: false,
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { values, classes } = this.props;

    return (
      <div className="py-12 text-start dark:bg-gray-900 mx-auto max-w-3xl space-y-8">
        <div className="container space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Project Information </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enter the details of your project below.
            </p>
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`project-${index}-title`}>
                      {`Project ${index} Title`}
                    </Label>
                    <Input
                      id={`project-${index}-title`}
                      name={`title${index}`}
                      required
                      value={this.state[`title${index}`]}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`project-${index}-link`}>
                      {`Project ${index} Link`}
                    </Label>
                    <Input
                      id={`project-${index}-link`}
                      name={`link${index}`}
                      placeholder="https://"
                      required
                      type="url"
                      value={this.state[`link${index}`]}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`project-${index}-description`}>
                    {`Project ${index} Description`}
                  </Label>
                  <Textarea
                    id={`project-${index}-description`}
                    name={`projectDescription${index}`}
                    placeholder="Enter a brief description of your project."
                    required
                    value={this.state[`projectDescription${index}`]}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center flex">
          <Button className="mr-20" onClick={this.back}>
            Back
          </Button>
          <Button onClick={this.continue}>Next</Button>
        </div>
        {/* <Button onClick={this.save}>Save</Button> */}
      </div>
    );
  }
}

export default Projects;
