import React, { useContext } from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { eventContext } from "../utils/Context";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const TimelinePage = ({ type }) => {
  const { eventData } = useContext(eventContext);
  const myEvent = eventData.filter((item) => item.category.toString() === type);
  const classes = useStyles();
  return (
    <div className=" flex flex-col items-center justify-center gap-6 pt-[10vh] w-screen bg-[#0e1538] overflow-x-hidden">
      <div className=" flex items-center justify-center gap-2 text-white text-3xl border-b-2 py-2 border-white">
        <FaClock />
        <h2 className=" text-white">{type} Timeline</h2>
      </div>
      <div data-aos="fade-up" className="w-full p-3 ">
        {myEvent.map((item, index) => {
          return (
            <Link to={`/events/${item.id}`} key={index}>
              <div data-aos="fade-right" className=" my-2">
                <div>
                  <p variant="body2" color="" className=" text-white text-xl">
                    {item.time} , {item.date}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TimelinePage;
