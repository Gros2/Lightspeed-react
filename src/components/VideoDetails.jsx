import React from "react";
import PropTypes from "prop-types";
import {
  DetailHeadingBox,
  VideoDetailsContainer,
  DetailsTitle,
  DetailsHeading,
  DetailsTop,
  AlphaTag,
  ViewerTag,
} from "../styles/videoDetailsStyles";
import { LightspeedLogoURL } from "../assets/constants";

const VideoDetails = ({ viewers }) => {
  return (
    <VideoDetailsContainer>
    </VideoDetailsContainer>
  );
};

export default VideoDetails;

VideoDetails.propTypes = {
  viewers: PropTypes.number,
};
