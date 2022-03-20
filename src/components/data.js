export const introductionData = {
  vn: {
    birthday: "Ngày sinh",
    phone: "SĐT",
    introductionTitle: "Giới thiệu",
    introductionText:
      "<p>''Lời đầu tiêu, em rất cảm ơn quý anh/chị, nhà tuyển dụng đã xem qua CV này. Em là người cởi mở và rất dễ hòa đồng với đồng nghiệp. Nếu được sử dụng 3 từ để miêu tả về bản thân, em xin phép được sử dụng những từ: <i>Nhẫn nại – Cố gắng – Tích cực học hỏi</i> . Mặc dù không học chuyên ngành CNTT và chỉ vừa mới chuyển ngành, nhưng với quyết tâm và sự đam mê và tinh thần sẵn sàng học hỏi với lĩnh vực lập trình Web, em tin tưởng mình vẫn sẽ đóng góp vào lợi ích của công ty và chính bản thân mình !.</p>",
    technicalTitle: "Kỹ năng",
    technicalList: ["HTML - CSS", "Javascript", "ReactJS"],
    jobGoalTitle: "Mục tiêu công việc",
    jobGoalText:
      "Mong muốn làm việc trong môi trường thân thiện, đầy thử thách và thường xuyên được trau dồi kiến thức, kĩ năng. Sử dụng các kinh nghiệm, kiến thức để đóng góp cho công ty, trở thành một FrontEnd Junior trong khoảng thời gian 3 năm.",
    orientation: "Định hướng công việc",
    orientationList: ["Typescript", "NextJS", "Tìm hiểu về Back-end"],
  },
  en: {
    birthday: "Birthday",
    phone: "Phone",
    introductionTitle: "Introduction",
    introductionText:
      "<p>''First of all, I would like to thanks to you for looking at this CV. I am open mind  and sociable with colleagues. If I could use 3 words to describe myself, I would like to use these words: <i>Patience - Effort - Actively learn</i>. Although I am not majoring in IT and just changed majors, with determination, passion and willingness to learn for Web programming, I believe I will still contribute to the company's benefits and myself !.</p>",
    technicalTitle: "Skill",
    technicalList: ["HTML - CSS", "Javascript", "ReactJS"],
    jobGoalTitle: "Job objective",
    jobGoalText:
      "Desire to work in a friendly, challenging environment and constantly improve knowledge and skills. Using the experience and knowledge to contribute to the company, become a FrontEnd Junior in a period of 3 years.",
    orientation: "Job Orientation",
    orientationList: ["Typescript", "NextJS", "Back-end"],
  },
};

export const navigationData = {
  vn: [
    {
      active: 0,
      id: "Introduction",
      name: "Giới thiệu",
      icon: <i className="fa-solid fa-address-card "></i>,
      navigation: "/introduction",
    },

    {
      active: 1,
      id: "Experience",
      name: "Kinh nghiệm",
      icon: <i className="fa-solid fa-chalkboard-user"></i>,
      navigation: "/experience",
    },

    {
      active: 2,
      id: "Projects",
      name: "Đồ án",
      icon: <i className="fa-solid fa-diagram-project"></i>,
      navigation: "/projects",
    },

    {
      active: 3,
      id: "My Design",
      name: "Góc cá nhân",
      icon: <i className="fa-solid fa-heart"></i>,
      navigation: "/personal",
    },
  ],
  en: [
    {
      active: 0,
      id: "Introduction",
      name: "Introduction",
      icon: <i className="fa-solid fa-address-card "></i>,
      navigation: "/introduction",
    },

    {
      active: 1,
      id: "Experience",
      name: "Experience",
      icon: <i className="fa-solid fa-chalkboard-user"></i>,
      navigation: "/experience",
    },

    {
      active: 2,
      id: "Projects",
      name: "Projects",
      icon: <i className="fa-solid fa-diagram-project"></i>,
      navigation: "/projects",
    },

    {
      active: 3,
      id: "Personal",
      name: "Personal",
      icon: <i className="fa-solid fa-heart"></i>,
      navigation: "/personal",
    },
  ],
};

export const experienceData = {
  vn: [
    { time: "6/2021 - Nay", place: "Thực hành bài tập" },
    {
      time: "6/2021 - 8/2021",
      place: "Hoàn thành khóa học Udemy",
      position: "Nội dung: Khóa học Javascript cho người mới bắt đầu",
      link: "https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/lecture/28905328?start=15#notes",
    },
    {
      time: "12/2020 - 6/2021",
      place: "Công Ty Cổ Phần Lập Trình Zend Việt Nam",
      position: "Học viên Frontend - ReactJS",
    },

    {
      time: "8/2018 - 2/2021",
      place: "Công ty TNHH Freetrend Industrial A (VN)",
      position: "Vị Trí: Nhân viên Môi trường - Năng lượng",
      department: "Phòng An toàn - Sức khỏe - Môi trường",
    },
    {
      time: "3/2018 - 8/2018",
      place: "Công ty TNHH MTV An Toàn Lao động Đại Nam",
      position: "Vị trí: Nhân viên An toàn",
      department: "Phòng HSE",
    },
    {
      time: "2017 - 2018",
      place: "Viện Khí tượng, Thủy văn, Hải văn và Môi trường",
      position: "Vị trí: Nghiên cứu viên",
      department: "Phòng Kĩ Thuật",
    },
    {
      time: "2013 - 2017",
      place: "Trường ĐH Khoa học Tự Nhiên TP.HCM",
      position: "Sinh viên",
      department: "Khoa học Môi trường - Quản lý môi trường",
    },
  ],
  en: [
    { time: "6/2021 - Now", place: "Practice by myself" },
    {
      time: "6/2021 - 8/2021",
      place: "Completed Udemy Course",
      position: "Content: Javascript Basic for Beginner",
      link: "https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/lecture/28905328?start=15#notes",
    },
    {
      time: "12/2020 - 6/2021",
      place: "Zend Vietnam Programming Joint Stock Company",
      position: "Frontend - ReactJS Trainee",
    },

    {
      time: "8/2018 - 2/2021",
      place: "Freetrend industrial A (VN) Co., ltd",
      position: "Position: Environment and Energy Staff",
      department: "Department: HSE",
    },
    {
      time: "3/2018 - 8/2018",
      place: "Đại Nam Occupational Safety Co., ltd",
      position: "Position: Safety Staff",
      department: "Department: HSE",
    },
    {
      time: "2017 - 2018",
      place:
        "Institute of Meteorology, Hydrology, Oceanography and Environment",
      position: "Position: Reseacher",
      department: "Department: Technical ",
    },
    {
      time: "2013 - 2017",
      place: "University of Science – TP.HCM",
      position: "Position: Student",
      department: "Department: Environment - Major: Environment Management",
    },
  ],
};

export const projectData = {
  vn: [
    {
      name: "Meme",
      introduce: "Meme là 1 web app đăng tải và chia sẻ các hình ảnh vui nhộn",
      functionHighlight: "Các tính năng chính",
      function: [
        "Giao diện tối",
        "Comment 2 cấp (API không hỗ trợ)",
        "Upload Ảnh",
      ],

      technical: ["Công nghệ: ReactJS", "Redux", "Styled components"],
      linkDemoName: "Link demo: Project - Meme",
      link: "https://hd-meme.herokuapp.com/",

      youtubeLink: "https://www.youtube.com/embed/OkRPv5Sa72I",
    },

    {
      name: "Post UI",
      introduce: "Đây là project viết bằng HTML-CSS-Javacript",
      functionHighlight: "Các chức năng",
      function: [
        "Thêm - sửa - xóa - tìm kiếm bài viết",
        "Phân trang",
        "Xác minh form với Yup",
      ],

      technical: [
        "Ngôn ngữ: Javascript thuần",
        "Thay đổi bố cục tích lũy (CLS)",
        "Bootstrap v5",
      ],
      linkDemoName: "Link demo: Project - Post UI",
      link: "https://js-post-ui-nine.vercel.app/",
      youtubeLink: "https://www.youtube.com/embed/u8YIpyzJuZo",
    },

    {
      name: "The movie App",
      introduce:
        "Được xây dựng dựa vào api từ ''https://developers.themoviedb.org/3''",
      functionHighlight: "Các chức năng",
      function: [
        "Tìm kiếm video",
        "Thay đổi bố cục tích lũy (CLS)",
        "Hiệu ứng CSS",
      ],

      technical: ["Công nghệ: ReactJS", "SCSS", "Swiper"],
      linkDemoName: "Link demo: Project - The movie DB",
      link: "https://themoviedb-clone.vercel.app/",
      youtubeLink: "https://www.youtube.com/embed/ItZyt0VloMg",
    },

    {
      name: "Tic-tac-toe và Color Matching",
      introduce: "Các game đều được viết bằng Javascript thuần ",
      linkDemoName: [
        "Link demo: Project - Game Tic-tac-toe",
        "Link demo: Project - Game Color Maching",
      ],
      link: [
        "https://tic-tac-toe-eight-eosin.vercel.app/",
        "https://color-matching-one.vercel.app/",
      ],
      youtubeLink: [
        "https://www.youtube.com/embed/KI81c68AJxw",
        "https://www.youtube.com/embed/ZrqwrTHS6do",
      ],
    },
  ],
  en: [
    {
      name: "Meme",
      introduce: "Meme is a web app for posting and sharing funny pictures",
      functionHighlight: "Main function",
      function: [
        "Dark mode",
        "Two level comments (API not supported)",
        "Form validate with Yup",
      ],

      technical: ["Technical: ReactJS", "Redux", "Styled components"],
      linkDemoName: "Link demo: Project - Meme",
      link: "https://hd-meme.herokuapp.com/",

      youtubeLink: "https://www.youtube.com/embed/OkRPv5Sa72I",
    },

    {
      name: "Post UI",
      introduce: "This project is written in HTML-CSS-Javascript",
      functionHighlight: "Basic functions",
      function: [
        "Add - edit - delete - search posts",
        "Pagination",
        "Image Upload",
      ],

      technical: [
        "Language: Pure Javascript",
        "Cumulative Layout Shift (CLS)",
        "Bootstrap v5",
      ],
      linkDemoName: "Link demo: Project - Post UI",
      link: "https://js-post-ui-8b5gp1z2m-dthanhhuy132.vercel.app/",
      youtubeLink: "https://www.youtube.com/embed/u8YIpyzJuZo",
    },

    {
      name: "The movie App",
      introduce:
        "This web app is coded by api from ''https://developers.themoviedb.org/3''",
      functionHighlight: "Basic functions",
      function: ["Search videos", "Cumulative Layout Shift (CLS)"],

      technical: ["Technical: ReactJS", "SCSS", "Swiper"],
      linkDemoName: "Link demo: Project - The movie DB",
      link: "https://themoviedb-clone.vercel.app/",
      youtubeLink: "https://www.youtube.com/embed/ItZyt0VloMg",
    },

    {
      name: "Tic-tac-toe & Color Matching",
      introduce: "These are 2 basic games written in pure Javascript",
      linkDemoName: [
        "Link demo: Project - Game Tic-tac-toe",
        "Link demo: Project - Game Color Maching",
      ],
      link: [
        "https://tic-tac-toe-eight-eosin.vercel.app/",
        "https://color-matching-one.vercel.app/",
      ],
      youtubeLink: [
        "https://www.youtube.com/embed/KI81c68AJxw",
        "https://www.youtube.com/embed/ZrqwrTHS6do",
      ],
    },
  ],
};
