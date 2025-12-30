import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY,
  region: "ap-south-1"
});

const s3 = new AWS.S3();

export default s3;
