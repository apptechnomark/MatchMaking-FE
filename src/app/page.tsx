import FormComponent from "@/components/FormComponent";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-[#0592C6] mt-12">
      <div className="flex flex-col items-start justify-center">
        {/* <p className="text-xl font-semibold">LOGIC BEHIND THE MAGIC PRESENTS</p> */}
        <p className="text-3xl ml-10 lg:text-7xl lg:ml-0 font-bold mt-2 mb-10">
          AI PROFILE MATCHING
          {/* <br />
          ANALYZER */}
        </p>
        <p className="text-lg ml-10 lg:ml-0">A Quick Form</p>
        <FormComponent />
      </div>
    </div>
  );
};

export default page;
