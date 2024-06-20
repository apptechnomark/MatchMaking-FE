"use client";
import { Close } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Button,
  CircularProgress,
  IconButton,
  LinearProgress,
  TextField,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";

const FormComponent: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const [email, setEmail] = useState("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileErr, setFileErr] = useState<0 | 1 | 2 | 3>(0);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const allowedExtensions = ["pdf"];

  const validateFile = (file: File, type: number) => {
    if (type === 1) {
      const fileType = `${file.name}`;
      const fileTypeParts = fileType.split(".");
      const fileTypeExtension = fileTypeParts[fileTypeParts.length - 1];
      return allowedExtensions.includes(fileTypeExtension.toLowerCase());
    }
    if (type === 2) {
      const fileSizeInMB = Math.round(file.size / 1024 / 1024);
      return fileSizeInMB > 200;
    }
    return true;
  };

  const handleFileUpload = async (value: File) => {
    const validateExtensions = 1;
    const validateSize = 2;
    setFile(value);
    if (!validateFile(value, validateExtensions)) {
      setFileErr(1);
      setFileName(null);
      setIsUploading(false);
      setProgress(0);
    } else if (validateFile(value, validateSize)) {
      setFileName(null);
      setFileErr(2);
      setIsUploading(false);
      setProgress(0);
    } else {
      setProgress(0);
      setFileErr(0);
      setIsUploading(true);

      const file = value;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          const base64String = result.split(",")[1];
          setFileName(base64String);
        } else if (result instanceof ArrayBuffer) {
          const binaryString = Array.from(new Uint8Array(result))
            .map((byte) => String.fromCharCode(byte))
            .join("");
          const base64String = btoa(binaryString);
          setFileName(base64String);
        } else {
          console.error("Unsupported file type.");
        }
      };
      reader.readAsDataURL(file);
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (isUploading) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 20);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isUploading]);

  const FileNameWithTooltip = ({ file }: any) => {
    const fileName = file?.name || "";

    return (
      <>
        {fileName.length > 30 ? (
          <Tooltip title={fileName} placement="top" arrow>
            <span>{`${fileName.slice(0, 30)}...`}</span>
          </Tooltip>
        ) : (
          <span>{fileName}</span>
        )}
      </>
    );
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    fileName === null && setFileErr(3);

    if (fileName !== null && fileErr === 0) {
      setLoaded(true);
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", "");
        if (file) {
          formData.append("file", file);
        } else {
          throw new Error("File is null");
        }
        localStorage.setItem("File", fileName);
        const response = await axios.post(
          "https://crm-stageapi.pacificabs.com:5001/match_making",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const { ResponseStatus } = response.data;
        if (ResponseStatus.toLowerCase() === "success") {
          toast.success("Form submitted successfully!");
          localStorage.setItem("ResponseData", JSON.stringify(response.data));
          setLoaded(false);
          router.push("/recommendations");
        } else {
          toast.error("Failed to submit form. Please try again.");
          setLoaded(false);
        }
      } catch (error) {
        setLoaded(false);
        toast.error("Failed to submit form. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ml-10 lg:ml-0 w-[80%] lg:w-[50%]">
      <TextField
        label="Name"
        fullWidth
        value={name?.trim().length <= 0 ? "" : name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        autoComplete="off"
        margin="normal"
        variant="standard"
      />
      <TextField
        type="email"
        sx={{ mt: "12px" }}
        label="Email"
        fullWidth
        value={email?.trim().length <= 0 ? "" : email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        autoComplete="off"
        margin="normal"
        variant="standard"
      />
      <div
        className={`py-2 h-full w-full flex flex-wrap items-center justify-center text-center cursor-pointer mt-4`}
      >
        <div
          className={`!h-16 bg-slate-300
 
            ${
              true ? `border-red-600` : `border-gray-300`
            } rounded-lg w-full overflow-hidden flex justify-center items-center`}
        >
          <span className="cursor-pointer w-full">
            {!!fileName ? (
              <span className="text-center justify-center items-center w-full flex flex-col text-xs font-normal text-[#333] p-2">
                {isUploading ? (
                  <div className="w-5/6">
                    <span>Uploading..</span>
                    <LinearProgress
                      className="!w-40"
                      variant="determinate"
                      value={progress}
                    />
                  </div>
                ) : (
                  <span className="truncate w-full px-4 flex items-center justify-between">
                    <p className="text-[16px]">
                      {file && <FileNameWithTooltip file={file} />}
                    </p>
                    <IconButton
                      onClick={() => {
                        setFile(null);
                        setFileName(null);
                      }}
                    >
                      <Close />
                    </IconButton>
                  </span>
                )}
              </span>
            ) : (
              <Dropzone
                multiple={false}
                onDrop={(acceptedFiles) => handleFileUpload(acceptedFiles[0])}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <span
                        className={`cursor-pointer w-full select-none flex justify-between items-center text-center text-sm font-normal text-[#333] px-4`}
                      >
                        <div className="flex items-center gap-2">
                          <CloudUploadIcon />
                          <div className="flex flex-col items-start">
                            <p className="text-xs lg:text-sm">
                              {" "}
                              Drag and drop files here
                            </p>
                            <p className="text-xs opacity-50">
                              Limit 200MB per file PDF
                            </p>
                          </div>
                        </div>
                        <div>
                          <Button
                            variant="outlined"
                            className="border-gray-500 text-gray-500 bg-white hover:border-gray-500 hover:text-gray-500 hover:bg-white text-xs px-1 lg:px-2"
                          >
                            Browse Files
                          </Button>
                        </div>
                      </span>
                    </div>
                  </section>
                )}
              </Dropzone>
            )}
          </span>
        </div>
        <div className="flex w-full select-none mt-1 text-red-600 text-xs">
          {fileErr === 1
            ? "Only PDF files are accepted. Please upload a valid PDF file."
            : fileErr === 2
            ? " File size shouldn&apos;t be more than 200MB."
            : fileErr === 3
            ? " This is a required field."
            : ""}
        </div>
      </div>
      {loaded ? (
        <span className="w-full flex item-center text-sm lg:text-md justify-center border border-gray-400 bg-gray-200 font-semibold rounded-full py-2 mt-2">
          We are matching your profile please wait...
        </span>
      ) : (
        <Button
          variant="contained"
          className="rounded-[4px] !h-[36px] mt-5 w-full !bg-[#0592C6] cursor-pointer"
          type="submit"
        >
          Submit
        </Button>
      )}
    </form>
  );
};

export default FormComponent;
