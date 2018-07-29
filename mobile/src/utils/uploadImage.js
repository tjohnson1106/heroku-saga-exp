import { defaultFieldResolver } from "../../node_modules/@types/graphql";

// start with async function

const uploadImage = async (method, url, file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", file.type);
  });
};

//image = image inside persisted local image on mobile device
export const uploadImageToS3 = async (image, signS3) => {
  await uploadImage();

  return { image, remoteUrl: signS3.url };
};
