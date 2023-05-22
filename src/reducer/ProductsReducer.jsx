// export const reducer = (state, action) => {

//     console.log(action)
//     switch (action.type) {
//     //   case "SEARCHTEXT":
//     //     return { ...state, searchCriteria: action.value };
    
//     //   case "SEARCH":
//     //     return {
//     //       searchCriteria: "",
//     //       infinityData:
//     //         state.searchCriteria === null ||
//     //         state.searchCriteria === undefined ||
//     //         state.searchCriteria === ""
//     //           ? data
//     //           : data.filter((data) =>
//     //               data.name
//     //                 .toLowerCase()
//     //                 .includes(state.searchCriteria.toLowerCase())
//     //             )
//     //     };
//         case "INITIAL":
//             return setState({
//                 ...state,
//                 price: Math.max(...action.value.map((o) => o.price)),
//                 filteredProducts: action.value,
//                 initialProducts: action.value
//             });
//         case "PRICE":
//         return setState({
//             ...state,
//             price: action.value
//         });
    
//         case "CATEGORIES":
//         return setState({
//             ...state,
//             categories: action.checked ? [...state.categories, action.value] : state.categories.filter((item) => item.toLowerCase() !== action.value.toLowerCase())
//         });
    
//         case "RATINGS":
//         return setState({
//             ...state,
//             ratings: action.value
//         });
    
//         case "SORT":
//             return setState({
//                 ...state,
//                 sortBy: action.value
//         });
//         default:
//         return state;
//     }
//     };
      
//     const setState = (state) => {

//         console.log(state.initialProducts)
//     //SORT BY
//     let sortedData =
//         state.sortBy !== ""
//         ? state.initialProducts.sort((a, b) =>
//             state.sortBy === "highToLow"
//                 ? Number(b.price) - Number(a.price)
//                 : Number(a.price) - Number(b.price)
//             )
//         : state.initialProducts;
    
//     // PRICE
//     sortedData = sortedData.filter((item) => item.price >= Math.min(...sortedData.map((o) => Number(o.price))) && Number(item.price) <= state.price)

//     // CATEGORIES
//     sortedData = state.categories.length > 0
//         ? sortedData.filter((item) => state.categories.includes(item.categoryName))
//         : sortedData;
    
//     // RATINGS
//     sortedData = state.ratings !== ""
//     ? sortedData.filter((item) => Number(item.averageRatings) >= Number(state.ratings))
//     : sortedData;

//     return { ...state, filteredProducts: sortedData };
//     };