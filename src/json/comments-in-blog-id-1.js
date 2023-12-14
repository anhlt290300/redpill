const data = [
  {
    data: {
      id: 1,
      blogId: 1,
      name: "TOÀN",
      email: "toan@gmail.com",
      website: "",
      content: "Chắc a pill come back r",
      parentId: null,
      commentDate: "2023-12-11T15:30:00Z",
    },
    children: [
      {
        data: {
          id: 3,
          blogId: 1,
          name: "ADMIN",
          email: "admin@gmail.com",
          website: "",
          content:
            "Bài này của ông Đạo sĩ trên facebook nha bro. Mình sưu tầm về thôi.",
          parentId: 1,
          commentDate: "2023-12-11T15:34:00Z",
        },
        children: [
          {
            data: {
              id: 4,
              blogId: 1,
              name: "TOÀN",
              email: "toan@gmail.com",
              website: "",
              content: "Cảm ơn bạn đã chia sẽ kiến thức!",
              parentId: 3,
              commentDate: "2023-12-11T15:40:00Z",
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    data: {
      id: 2,
      blogId: 1,
      name: "TRUNG",
      email: "trung@gmail.com",
      website: "",
      content: "Chuyện hẹn hò là chuyện xã hội mà mày????",
      parentId: null,
      commentDate: "2023-12-11T15:36:00Z",
    },
    children: [
      {
        data: {
          id: 5,
          blogId: 1,
          name: "LÊ SÁT",
          email: "sat@gmail.com",
          website: "",
          content:
            "Tao không hiểu là mày định nghĩa thế nào thì là chuyện xã hội?",
          parentId: 2,
          commentDate: "2023-12-11T15:39:00Z",
        },
        children: [],
      },
    ],
  },
];

export const getCommentByBlogId1 = (id) =>
  data.filter((el) => el.data.blogId === id);
