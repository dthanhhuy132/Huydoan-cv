function importAll(r) {
  let images = [];
  images.push();

  r.keys().map((item, index) => {
    images.push(r(item));
  });

  return images;
}

function getImgList(link) {
  return importAll(require.context(link, true, /\.(png|jpg|svg)$/));
}

let link1 = "../../assets/activityImg/energyDay/";

const personalData = {
  vn: [
    {
      name: "Ngày năng lượng thế giới",
      introduction:
        "Hưởng ứng ngày ''Năng lượng thế giới'' với nhiều hoạt động, trong đó với các poster nhằm nâng cao nhật thức và góp phần tuyên truyền",
      imgList: importAll(
        require.context(
          "../../assets/activityImg/energyDay/",
          true,
          /\.(png|jpg|svg)$/
        )
      ),
    },

    {
      name: "Ngày Môi trường thế giới",
      introduction:
        "Đây là hoạt động giáo dục, truyền thông môi trường tại 1 trường THCS ở Bình Dương, hưởng ứng ngày ''Môi trường thế giới''",
      imgList: importAll(
        require.context(
          "../../assets/activityImg/environmentDay/",
          true,
          /\.(png|jpg|svg)$/
        )
      ),
    },
  ],
};

export const personalDataOther = {
  vn: {
    name: "Phân loại rác và hạn chế sử dụng chai nhựa",
    introduction:
      "Đây là hoạt động giáo dục, truyền thông môi trường tại 1 trường THCS ở Bình Dương, hưởng ứng ngày ''Môi trường thế giới''",
    imgList: importAll(
      require.context(
        "../../assets/activityImg/other",
        true,
        /\.(png|jpg|svg)$/
      )
    ),
  },
};

export default personalData;
