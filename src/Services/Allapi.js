import {commonApi} from "./commonapi";
import{BASE_URL} from "./baseurl"

export const registerApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,data,"")
}
// export const loginApi=async(data)=>{
//     return await commonApi("POST",`${BASE_URL}/user/login`,data,"")
// }

// export const addBookApi=async(data,headers)=>{
//     return await commonApi("POST",`${BASE_URL}/book/addBooks`,data,headers)
// }
export const userLoginApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,data,"")
}

export const addBookApi=async(data,header)=>{
    return await commonApi("POST",`${BASE_URL}/admin/addbooks`,data,header)
}

export const getViewListApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getadminview`,'',headers)
}
export const deleteBookApi=async(headers,id)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deletebook/${id}`,{},headers)
}
export const updateBookApi=async(headers,data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/admin/updatebook/${id}`,data,headers)
}
export const getNovelApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/category/novel`,'',headers)
}
export const getAutoApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/category/autobio`,'',headers)
}
export const getWorldApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/category/worldclass`,'',headers)
}
export const getFictionApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/category/fiction`,'',headers)
}
export const addpaymentApi=async(data,headers)=>{
    return await commonApi("POSt",`${BASE_URL}/user/addpayment`,data,headers)
}
export const getPayviewApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getpaymentview`,'',headers)
}
export const addcartApi=async(data,header)=>{
    return await commonApi("POST",`${BASE_URL}/admin/addcarts`,data,header)
}
export const getcartviewApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/user/getcartview`,'',headers)
}
export const deleteCartApi=async(headers,id)=>{
    return await commonApi("DELETE",`${BASE_URL}/user/removecart/${id}`,{},headers)
}
