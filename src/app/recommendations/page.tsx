"use client";
import React, { useEffect, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { CircularProgress } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Page: React.FC = () => {
  const [loader, setLoader] = useState<any>(false);
  const [responseData, setResponseData] = useState<any>([]);

  useEffect(() => {
    setLoader(true);
    let ResponseData: any = localStorage.getItem("ResponseData");
    if (ResponseData) {
      try {
        const parsedResponseData = JSON.parse(ResponseData);
        setResponseData(parsedResponseData);
        setLoader(false);
      } catch (error) {
        setResponseData([]);
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  }, []);
  
  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-12 mb-8 gap-5">
          {responseData?.ResponseData?.length > 0 ? (
            <>
              <div className="flex items-center justify-center lg:gap-2 text-md lg:text-xl font-semibold">
                <span>
                  Hello&nbsp;
                  {!!responseData?.Username
                    ? responseData?.Username?.charAt(0).toUpperCase() +
                      responseData?.Username?.slice(1) +
                      ", "
                    : "User, "}
                  <a
                    href={`http://20.198.19.81/match_making/upload/${responseData?.file_path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0592C6]"
                  >
                    Your CV
                  </a>
                  &nbsp;matches the below profiles
                </span>
                <TipsAndUpdatesIcon className="text-yellow-400" />
              </div>
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
                    {responseData?.ResponseData?.map(
                      (item: any, index: any) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                            {item.matchValue.toString().slice(0, 5)}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                            <a
                              href={`http://20.198.19.81/match_making/tmp8/${item.name}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0592C6]"
                            >
                              <RemoveRedEyeIcon />
                            </a>
                          </td>
                        </tr>
                      )
                    )}
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
