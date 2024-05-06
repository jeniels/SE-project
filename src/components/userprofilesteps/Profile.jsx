// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function Profile() {
//   return (
//     <div className="mx-auto max-w-3xl space-y-8">
//       <div className="space-y-2 text-center">
//         <h1 className="text-4xl font-bold">Personal Details</h1>
//         <p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400">
//           Please fill out the information below to register.
//         </p>
//       </div>
//       <div className="space-y-4 text-start">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="first-name">First name</Label>
//             <Input
//               id="first-name"
//               placeholder="Enter your first name"
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="last-name">Last name</Label>
//             <Input id="last-name" placeholder="Enter your last name" required />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               placeholder="Enter your email"
//               required
//               type="email"
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone number</Label>
//             <Input
//               id="phone"
//               placeholder="Enter your phone number"
//               required
//               type="tel"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="website">Your website</Label>
//             <Input id="website" placeholder="Enter your website" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="github">GitHub</Label>
//             <Input
//               id="github"
//               placeholder="Enter your GitHub username"
//               required
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="linkedin">LinkedIn</Label>
//             <Input
//               id="linkedin"
//               placeholder="Enter your LinkedIn username"
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="twitter">Twitter</Label>
//             <Input
//               id="twitter"
//               placeholder="Enter your Twitter username"
//               required
//             />
//           </div>
//         </div>
//         <Button>Next</Button>
//       </div>
//     </div>
//   );
// }
import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

class Profile extends Component {
  state = {
    open: false,
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { values } = this.props;

    return (
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Personal Details</h1>
          <p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400">
            Please fill out the information below to register.
          </p>
        </div>
        <div className="space-y-4 text-start">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Enter your first name"
                required
                value={values.firstname}
                onChange={this.props.handleChange}
                name="firstname"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Enter your last name"
                required
                value={values.lastname}
                onChange={this.props.handleChange}
                name="lastname"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
                value={values.email}
                onChange={this.props.handleChange}
                name="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                required
                type="tel"
                value={values.phone}
                onChange={this.props.handleChange}
                name="phone"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website">Your website</Label>
              <Input
                id="website"
                placeholder="Enter your website"
                required
                value={values.website}
                onChange={this.props.handleChange}
                name="website"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                placeholder="Enter your GitHub username"
                required
                value={values.github}
                onChange={this.props.handleChange}
                name="github"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                placeholder="Enter your LinkedIn username"
                required
                value={values.linkedin}
                onChange={this.props.handleChange}
                name="linkedin"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                placeholder="Enter your Twitter username"
                required
                value={values.twitter}
                onChange={this.props.handleChange}
                name="twitter"
              />
            </div>
          </div>
          <Button onClick={this.continue}>Next</Button>
        </div>
        <Button variant="contained" color="primary" onClick={this.save}>
          Save
        </Button>
      </div>
    );
  }
}

export default Profile;
