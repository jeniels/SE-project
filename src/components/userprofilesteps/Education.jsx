import React, { Component } from "react";

import { Label } from "@/components/ui/label"; // Assuming you have a Label component
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Button } from "../ui/button";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: "",
      fromyear1: "",
      toyear1: "",
      qualification1: "",
      school: "",
      fromyear2: "",
      toyear2: "",
      qualification2: "",
      open: false,
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
          this.setState({ open: true });
        }
      })
      .catch((err) => console.log(err));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const {
      college,
      fromyear1,
      toyear1,
      qualification1,
      school,
      fromyear2,
      toyear2,
      qualification2,
    } = this.state;

    return (
      <div className="mx-auto max-w-3xl space-y-8 pb-10">
        <div className="space-y-8 text-start">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Education Details</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Add your educational background.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="college">College/University</Label>
              <Input
                id="college"
                name="college"
                placeholder="Enter college/university"
                value={college}
                onChange={this.handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fromyear1">From Year</Label>
                <Input
                  id="fromyear1"
                  name="fromyear1"
                  placeholder="Enter start date"
                  type="date"
                  value={fromyear1}
                  onChange={this.handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="toyear1">To Year</Label>
                <Input
                  id="toyear1"
                  name="toyear1"
                  placeholder="Enter end date"
                  type="date"
                  value={toyear1}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="qualification1">Qualification</Label>
              <Input
                id="qualification1"
                name="qualification1"
                placeholder="Enter qualification"
                value={qualification1}
                onChange={this.handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="school">School</Label>
              <Input
                id="school"
                name="school"
                placeholder="Enter school"
                value={school}
                onChange={this.handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fromyear2">From Year</Label>
                <Input
                  id="fromyear2"
                  name="fromyear2"
                  placeholder="Enter start date"
                  type="date"
                  value={fromyear2}
                  onChange={this.handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="toyear2">To Year</Label>
                <Input
                  id="toyear2"
                  name="toyear2"
                  placeholder="Enter end date"
                  type="date"
                  value={toyear2}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="qualification2">Qualification</Label>
              <Input
                id="qualification2"
                name="qualification2"
                placeholder="Enter qualification"
                value={qualification2}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="gap-10">
          <Button className="mr-20" onClick={this.back}>
            Back
          </Button>
          <Button onClick={this.continue}>Next</Button>
        </div>
      </div>
    );
  }
}

export default Education;
