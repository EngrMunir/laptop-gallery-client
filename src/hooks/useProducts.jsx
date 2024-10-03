// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic();
    // const [products, setProducts] =useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     fetch('https://laptop-gallery-server.vercel.app/product')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setProducts(data);
    //         setLoading(false);
    //     })
    // },[])

    const {data:products =[], isPending:loading, refetch}= useQuery({
        queryKey:['product'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/product');
            return res.data;
        }
    })
    return ([products,loading, refetch]);
};

export default useProducts;