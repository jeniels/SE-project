import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import sdk from "@stackblitz/sdk";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function LiveCode() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const embedProject = async () => {
    try {
      // const result = await sdk.embedProjectId(
      //   "embed",
      //   "reactjs-sample-project",
      //   {
      //     openFile: "src/App.tsx",
      //     height:"800px"
      //   }
      // );
      setIsEditorOpen(true);
      const result = await sdk.embedGithubProject("embed", "jeniels/vite-app", {
        height: "800px",
      });

      console.log(result);
    } catch (error) {
      console.error("Error embedding project:", error);
      setIsEditorOpen(false);
    }
  };
  useEffect(() => {
    // embedProject();
  }, []);

  return (
    <div className="flex p-5 justify-center items-center flex-col h-screen w-full">
      {!isEditorOpen ? (
        <Button onClick={() => embedProject()}>
          Clone my github repo : jeniels
        </Button>
      ) : null}
      <div id="embed"></div>
    </div>
  );
}
