import React from "react";

const DEFAULT_URL =
  "https://res.cloudinary.com/sivadass/image/upload/v1559361306/icons/default-imge.jpg";
const DEFAULT_TAG = "default image";
const DEFAULT_STYLES = {
  display: "block",
  width: "100%"
};

const Image = ({
  url = DEFAULT_URL,
  altTag = DEFAULT_TAG,
  style = DEFAULT_STYLES
}) => {
  return <img src={url} alt={altTag} style={style} />;
};

export default Image;
