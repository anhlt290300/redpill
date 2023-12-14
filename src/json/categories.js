const data = [
  {
    id: 1,
    category: "Daddy issues – Damaged Woman",
    slugCategory: "category-daddy-issues-damaged-woman",
  },
  {
    id: 2,
    category: "Forum Ẩn Red Pill VN",
    slugCategory: "category-forum-an-red-pill-vn",
  },
  {
    id: 3,
    category: "Giải độc truyền thông bẩn.",
    slugCategory: "category-giai-doc-truyen-thong-ban",
  },
];

const getAllCategory = () => data;

const getCategoryById = (id) => data.filter((e) => e.id === id);

export { getAllCategory, getCategoryById };
