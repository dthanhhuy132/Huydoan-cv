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
        "Hưởng ứng ngày ''Năng lượng thế giới'' với nhiều hoạt động, trong đó với các poster nhằm nâng cao nhật thức và góp phần tuyên truyền các hành động tiết kiệm năng lượng và bảo vệ môi trường",
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

  en: [
    {
      name: "Energy Day",
      introduction:
        "For Responding to ''World Energy Day'' with many activities, including posters to raise awareness and contribute to propaganda about actions to save energy and protect the environment",
      imgList: importAll(
        require.context(
          "../../assets/activityImg/energyDay/",
          true,
          /\.(png|jpg|svg)$/
        )
      ),
    },

    {
      name: "Environement Day",
      introduction:
        "This is an environmental education and communication activity at a secondary school in Binh Duong for responding to the ''World Environment Day''",
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

    imgList: importAll(
      require.context(
        "../../assets/activityImg/other",
        true,
        /\.(png|jpg|svg)$/
      )
    ),
  },

  en: {
    name: "''Waste separation'' and ''Reduce plastic bottles using''",

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
