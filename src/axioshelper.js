import { testapi } from "boot/axios";
const ApiKEY = "api_key=5300b6bac551723a9969ee493504ca36";

const getData = function () {
  return testapi.get("/movie/popular?" + ApiKEY).then(function (data) {
    return data.data;
  });
};

export const getAllData = () => {
  return getData();
};
