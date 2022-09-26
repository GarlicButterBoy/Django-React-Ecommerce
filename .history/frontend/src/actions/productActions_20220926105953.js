import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productContants";
import Product from "../components/Product";
import axios from "axios";


const listProducts = () => async {
     async function fetchProducts() {
       const { data } = await axios.get("/api/products/");
       setProducts(data);
     }
}