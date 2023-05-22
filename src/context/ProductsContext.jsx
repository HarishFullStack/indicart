import { createContext, useEffect, useReducer, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({children}) {

    const [products, setProducts] = useState([]);

    const setState = (state) => {
    let sortedData =
        state.searchCriteria === null ||
        state.searchCriteria === undefined ||
        state.searchCriteria === ""
        ? state.initialProducts
        : state.initialProducts.filter((item) =>
            item.title
                .toLowerCase()
                .includes(state.searchCriteria.toLowerCase())
            )
    // PRICE
    sortedData = sortedData.filter((item) => item.price >= Math.min(...sortedData.map((o) => Number(o.price))) && Number(item.price) <= state.price)

    // CATEGORIES
    sortedData = state.categories.length > 0
        ? sortedData.filter((item) => state.categories.includes(item.categoryName))
        : sortedData;
    
    // RATINGS
    sortedData = state.ratings !== ""
    ? sortedData.filter((item) => Number(item.averageRatings) >= Number(state.ratings))
    : sortedData;

    //SORT BY
    sortedData =
    state.sortBy !== ""
    ? sortedData.sort((a, b) =>
        state.sortBy === "highToLow"
            ? Number(b.price) - Number(a.price)
            : Number(a.price) - Number(b.price)
        )
    : sortedData;

    return { ...state, filteredProducts: sortedData };
    };

    const reducer = (state, action) => {

        switch (action.type) {
            case "INITIAL":
                    return setState({
                        ...state,
                        price: Math.max(...action.value.map((o) => o.price)),
                        filteredProducts: action.value,
                        initialProducts: action.value
                    });

            case "SEARCH":
                return setState({...state, searchCriteria: action.value});

            
            case "PRICE":
            return setState({
                ...state,
                price: action.value
            });
        
            case "CATEGORIES":
            return setState({
                ...state,
                categories: action.checked ? [...state.categories, action.value] : state.categories.filter((item) => item.toLowerCase() !== action.value.toLowerCase())
            });
        
            case "RATINGS":
            return setState({
                ...state,
                ratings: action.value
            });
        
            case "SORT":
                return setState({
                    ...state,
                    sortBy: action.value
            });

            case "CLEAR":
                return setState({
                    ...state, 
                    price: Number(Math.max(...state.initialProducts.map(o => o.price))),
                    categories: [],
                    ratings: "",
                    sortBy: ""
                })
            default:

            return state;
        }
    };

    const clearFilters = () => {

    }

    const [state, dispatch] = useReducer(reducer, {
        searchCriteria: "",
        price: Number(Math.max(...products.map((o)=> o.price))),
        categories: [],
        ratings: "",
        sortBy: "",
        initialProducts: [],
        filteredProducts: []
    });

    return(
        <ProductsContext.Provider value={{ state, dispatch, products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}