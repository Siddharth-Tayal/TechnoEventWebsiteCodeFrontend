import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { SportsCricket, LaptopMac } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
      <Timeline align="alternate" data-aos="fade-up" className="w-full p-3 ">
        {myEvent.map((item, index) => {
          return (
            <Link to={`/events/${item.id}`} key={index}>
              <TimelineItem data-aos="fade-right" className=" my-2">
                <TimelineOppositeContent>
                  <Typography
                    variant="body2"
                    color=""
                    className=" text-white text-xl"
                  >
                    {item.time} , {item.date}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    color={
                      item.category === "Technical"
                        ? "primary"
                        : item.category === "Sports"
                        ? "grey"
                        : "secondary"
                    }
                  >
                    {item.category === "Technical" ? (
                      <LaptopMac />
                    ) : item.category === "Sports" ? (
                      <SportsCricket />
                    ) : (
                      <GiMusicalNotes />
                    )}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography>{item.name}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Link>
          );
        })}
      </Timeline>
    </div>
  );
};
export default TimelinePage;
