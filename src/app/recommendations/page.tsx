"use client";
import React, { useEffect, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { CircularProgress, Tooltip } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

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
    setUserName(Username || "User");
    if (ResponseData) {
      try {
        const parsedResponseData = JSON.parse(ResponseData);
        setResponseData(parsedResponseData);
      } catch (error) {
        setResponseData([]);
      }
    }
    setLoader(false);
  }, []);

  const handleDownload = () => {
    const binaryData: any = localStorage.getItem("File");
    const blob = new Blob([binaryData], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    console.log(url);
    a.download = `${userName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
          {/* {!!userName && (
            <div className="flex items-center justify-center gap-2 text-xl font-semibold">
              {userName.charAt(0).toUpperCase() + userName.slice(1)}&apos;s
              Profile Matching
              <TipsAndUpdatesIcon className="text-yellow-400" />
            </div>
          )} */}

          {responseData.length > 0 ? (
            <>
              <div className="flex items-center justify-center lg:gap-2 text-md lg:text-xl font-semibold">
                <span>
                  Hello&nbsp;
                  {userName.charAt(0).toUpperCase() + userName.slice(1) + " "}
                  {/* <span
                    onClick={handleDownload}
                    className="cursor-pointer text-blue-500 underline"
                  >
                    Your CV
                  </span> */}
                  <a
                    href="http://20.198.19.81/match_making/upload/Document.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0592C6]"
                  >
                    Your CV
                  </a>
                  &nbsp;matches the below profile
                </span>
                <TipsAndUpdatesIcon className="text-yellow-400" />
              </div>
              {/* <div
                className={`flex flex-wrap items-center justify-start border border-gray-500 bg-gray-100 rounded-lg w-[90%] lg:w-1/2 min-h-20 py-5 px-2 gap-5`}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center w-full mb-4 px-10">
                    <h3 className="w-2/3 lg:w-1/2 text-left font-bold">Name</h3>
                    <h3 className="w-1/3 lg:w-1/2 text-right font-bold">
                      Match
                    </h3>
                  </div>
                  {responseData?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between w-full mb-3 px-10"
                    >
                      <span className="w-2/3 lg:w-1/2 text-left">
                        {item.name.length > 30 ? (
                          <Tooltip title={item.name} placement="top" arrow>
                            <span>{`${item.name.slice(0, 30)}...`}</span>
                          </Tooltip>
                        ) : (
                          item.name
                        )}
                      </span>
                      <span className="w-1/3 lg:w-1/2 text-right">
                        {item.matchValue.toString().slice(0, 5)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="border border-gray-500 bg-gray-100 rounded-lg p-5">
                <table className="min-w-full divide-y bg-gray-100 divide-gray-400">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Match
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-100 divide-y divide-gray-400">
                    {responseData?.map((item: any, index: any) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {
                            // item.name.length > 30 ? (
                            //   <Tooltip title={item.name} placement="top" arrow>
                            //     <span>{`${item.name.slice(0, 30)}...`}</span>
                            //   </Tooltip>
                            // ) : (
                            item.name
                            // )
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                          {item.matchValue.toString().slice(0, 5)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                          <a
                            href={`http://20.198.19.81/match_making/upload/${item.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0592C6]"
                          >
                            <RemoveRedEyeIcon />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-center">
              There is no match found.
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Page;
