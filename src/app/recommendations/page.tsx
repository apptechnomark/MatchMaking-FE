"use client";
import React, { useEffect, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { CircularProgress, Tooltip } from "@mui/material";

// type SkillTagProps = {
//   skill: string;
// };

// const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
//   <div className="bg-[#0592C6] px-4 py-1 rounded-2xl text-white flex items-center justify-center w-[154px]">
//     {skill.length > 13 ? (
//       <Tooltip title={skill} placement="top" arrow>
//         <span>{`${skill.slice(0, 10)}...`}</span>
//       </Tooltip>
//     ) : (
//       skill
//     )}
//   </div>
// );

// const skills: string[] = [
//   "Java Script",
//   "Java",
//   "HTML",
//   "Java Script",
//   "Java",
//   "HTML",
// ];

const Page: React.FC = () => {
  const [loader, setLoader] = useState<any>(false);
  const [userName, setUserName] = useState<any>("");
  const [responseData, setResponseData] = useState<any>([]);

  useEffect(() => {
    setLoader(true);
    let Username: any = localStorage.getItem("Username");
    let ResponseData: any = localStorage.getItem("ResponseData");
    setUserName(Username);
    if (ResponseData) {
      try {
        const parsedResponseData = JSON.parse(ResponseData); // Parse ResponseData from string to array
        setResponseData(parsedResponseData);
      } catch (error) {
        console.error("Error parsing ResponseData:", error);
        setResponseData([]); // Set to empty array in case of parsing error
      }
    }
    Username?.length > 0 ? setLoader(false) : setLoader(true);
  }, []);

  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-12 mb-8 gap-5">
          {/* <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            {userName.charAt(0).toUpperCase() + userName.slice(1)}&apos;s Skills
            Matching
            <TipsAndUpdatesIcon className="text-yellow-400" />
          </div>
          <div
            className={`flex flex-wrap items-center justify-center border border-gray-500 bg-gray-100 rounded-lg w-1/2 min-h-20 py-5 px-2 gap-5`}
          >
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div> */}
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            {userName.charAt(0).toUpperCase() + userName.slice(1)}&apos;s
            Profile Matching
            <TipsAndUpdatesIcon className="text-yellow-400" />
          </div>
          <div
            className={`flex flex-wrap items-center justify-start border border-gray-500 bg-gray-100 rounded-lg w-1/2 min-h-20 py-5 px-2 gap-5`}
          >
            {responseData.length > 0 ? (
              <div className="w-full">
                <div className="flex justify-between items-center w-full mb-4 px-10">
                  <h3 className="w-1/2 text-left font-bold">Name</h3>
                  <h3 className="w-1/2 text-right font-bold">Match Value</h3>
                </div>
                {responseData?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between w-full mb-3 px-10"
                  >
                    <span className="w-1/2 text-left">
                      {item.name.length > 30 ? (
                        <Tooltip title={item.name} placement="top" arrow>
                          <span>{`${item.name.slice(0, 30)}...`}</span>
                        </Tooltip>
                      ) : (
                        item.name
                      )}
                    </span>
                    <span className="w-1/2 text-right">
                      {item.matchValue.toString().slice(0, 5)}%
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                There is no match found.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
