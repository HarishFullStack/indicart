import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dkkmc7pub/image/upload/v1684424397/indicart/jbareham_201014_1047_scifi_books_essentials_02_lbbxdn.jpg",
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dkkmc7pub/image/upload/v1684424973/indicart/0_gzj0Ccwtsh2VK_eX_q9txmw.jpg",
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dkkmc7pub/image/upload/v1684425113/indicart/Sci-Fi-Fantasy-Horror-2021_rv9i2l.png",
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
