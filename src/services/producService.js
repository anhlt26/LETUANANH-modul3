/// cac ham dung call du lieu tu backend => API do

const productList = [
    {
        id: 1,
        name: "samsong",
    },
    {
        id: 2,
        name: "apple",
    },
    {
        id: 3,
        name: "xiaomi",
    },
    {
        id: 4,
        name: "vivo",
    }]
export function getAllproduct(){
//goi API o day nhe
return productList

}
export function addNewProduct(product){
    productList.push(product);
}
