import React, { useState } from "react";
import Data3 from "../animations/Animation - 1707026607235.json";
import Lottie from "react-lottie";
import toast from "react-hot-toast";
import axios from "axios";
const Register = () => {
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Data3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [otpsend, setOtpSend] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isVerfied, setIsVerified] = useState(false);
  const registerEmailOTP = async () => {
    const formData1 = {
      email: formData.email,
    };
    try {
      const response = await axios.post("http://localhost:4000/otp", formData1);
      console.log(response);
      if (response.data.success === false) {
        toast.error("Invalid Email");
        return;
      }
      toast.success("Mail sent successfully");
      setOtpSend(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    studentId: "",
    year: "1st Year",
    course: "B.Tech CSE",
    TechnicalEvents: [],
    CulturalEvents: [],
    SportsEvents: [],
  });
  const handleChange = (e, event) => {
    const { value, checked } = e.target;
    const { TechnicalEvents, CulturalEvents, SportsEvents } = formData;

    // checks the box
    if (checked) {
      if (event === "T") {
        setFormData({
          ...formData,
          TechnicalEvents: [...TechnicalEvents, value],
        });
      } else if (event === "C") {
        setFormData({
          ...formData,
          CulturalEvents: [...CulturalEvents, value],
        });
      } else if (event === "S") {
        setFormData({
          ...formData,
          SportsEvents: [...SportsEvents, value],
        });
      }
    }
    // unchecks the box
    else {
      if (event === "T") {
        setFormData({
          ...formData,
          TechnicalEvents: TechnicalEvents.filter((e) => e !== value),
        });
      } else if (event === "C") {
        setFormData({
          ...formData,
          CulturalEvents: CulturalEvents.filter((e) => e !== value),
        });
      } else if (event === "S") {
        setFormData({
          ...formData,
          SportsEvents: SportsEvents.filter((e) => e !== value),
        });
      }
    }
  };
  const registerSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        formData
      );
      if (response.success === false) {
        toast.error(response.message);
        return;
      }
      toast.success("Registered Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const technicalEvents = [
    "Technical Quiz",
    "Technical Debate",
    "Managment Games",
    "On the Spot Coding",
    "Group Discussion",
    "Technical Quiz",
    "Technical Debate",
    "Managment Games",
    "On the Spot Coding",
    "Group Discussion",
    "Technical Quiz",
    "Technical Debate",
    "Managment Games",
    "On the Spot Coding",
    "Group Discussion",
    "Technical Quiz",
    "Technical Debate",
    "Managment Games",
    "On the Spot Coding",
    "Group Discussion",
    "Technical Quiz",
    "Technical Debate",
    "Managment Games",
    "On the Spot Coding",
    "Group Discussion",
  ];
  return (
    <div className=" relative bg-transparent">
      <div className=" absolute h-[100%] w-[100vw] flex items-center justify-center -z-10">
        <Lottie options={defaultOptions3} />
      </div>{" "}
      <form
        className=" flex flex-col gap-8   p-5 items-center justify-center w-full md:w-[50%] mx-auto"
        onSubmit={registerSubmit}
      >
        <h2 className=" text-white text-xl border-b-2 w-fit mx-auto ">
          Particpate Now
        </h2>
        <div className=" w-[80%] ">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className=" p-3 text-gray-900  border-b-2 border-blue-500 w-full rounded-lg outline-none"
          />
        </div>
        <div className=" w-[80%]">
          <input
            type="text"
            required
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className=" p-3 text-gray-900  border-b-2 border-blue-500 w-full rounded-lg outline-none"
          />
        </div>{" "}
        <div className=" w-[80%]">
          <input
            type="text"
            required
            placeholder="Student ID"
            onChange={(e) =>
              setFormData({ ...formData, studentId: e.target.value })
            }
            className=" p-3 text-gray-900  border-b-2 border-blue-500 w-full rounded-lg outline-none"
          />
        </div>
        <div className=" w-[80%]">
          <input
            type="text"
            required
            placeholder="Mobile No."
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            className=" p-3 text-gray-900  border-b-2 border-blue-500 w-full rounded-lg outline-none"
          />
        </div>
        <div className=" flex items-center justify-center gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            <label className=" font-semibold text-white ">Current Year :</label>
            <select
              id=""
              className=" border text-violet-800 rounded-lg p-3 bg-white"
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            >
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className=" font-semibold text-white ">Branch Name :</label>
            <select
              id=""
              className=" border rounded-lg text-violet-800 p-3 bg-white"
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
            >
              <option value="B.Tech CSE">B.Tech CSE </option>
              <option value="B.Tech ECE">B.Tech ECE</option>
              <option value="M.Tech">M.Tech </option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>{" "}
        </div>
        <div className=" flex flex-col items-center justify-center gap-5 ">
          <p className=" self-start text-2xl text-white font-bold ">
            Technical Events :{" "}
          </p>
          <div className=" flex items-center justify-center flex-wrap gap-6 max-h-[150px] overflow-y-auto border-2 shadow-md rounded-md p-3 shadow-purple-700">
            {technicalEvents &&
              technicalEvents.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" whitespace-nowrap text-white flex items-center justify-center gap-2 "
                  >
                    <input
                      type="checkbox"
                      value={item}
                      // name={"TechnicalEvents"}
                      onChange={(e) => handleChange(e, "T")}
                    />
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5 ">
          <p className=" self-start text-2xl text-white font-bold ">
            Cultural Events :{" "}
          </p>
          <div className=" flex items-center justify-center flex-wrap gap-6 max-h-[150px] overflow-y-auto border-2 shadow-md rounded-md p-3 shadow-purple-700">
            {technicalEvents.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" whitespace-nowrap text-white flex items-center justify-center gap-2 "
                >
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => handleChange(e, "C")}
                  />
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5 ">
          <p className=" self-start text-2xl text-white font-bold ">
            Sports Events :{" "}
          </p>
          <div className=" flex items-center justify-center flex-wrap gap-6 max-h-[150px] overflow-y-auto border-2 shadow-md rounded-md p-3 shadow-purple-700">
            {technicalEvents.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" whitespace-nowrap text-white flex items-center justify-center gap-2 "
                >
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => handleChange(e, "S")}
                  />
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-[80%]">
          <button
            onClick={registerEmailOTP}
            required
            className=" hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700 border-2 duration-300 border-white rounded-lg bg-blue-500 text-center p-3 w-full text-white hover:opacity-95"
          >
            Send OTP
          </button>
        </div>{" "}
        {otpsend && (
          <>
            <div className=" w-[80%]">
              <input
                type="text"
                placeholder="OTP"
                onChange={(e) =>
                  setFormData({ ...formData, otp: e.target.value })
                }
                className=" p-3 text-gray-900  border-b-2 border-blue-500 w-full rounded-lg outline-none"
              />
            </div>
            <div className=" w-[80%]">
              <input
                type="submit"
                value={"Register"}
                className=" hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700 border-2 duration-300 border-white rounded-lg bg-blue-500 text-center p-3 w-full text-white hover:opacity-95"
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Register;
