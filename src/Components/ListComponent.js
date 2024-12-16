import { useEffect, useState } from "react";
import { getAllproduct } from "../services/producService";
import { Link } from "react-router-dom";

function Listcomponent() {

    const [productList, setProductList] = useState([]);
    useEffect(() => {
        console.log("---runnn----")
        const listproduct = getAllproduct();
        setProductList(() => (
            [
                ...listproduct
            ]
        ))

    }, [])
    return (
        <>
            <h2>Product List</h2>
            <Link to={'/listproduct/create'}> Add New Product </Link>
            <table >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((p, i) => (
                        <tr key={p.id}>
                            <td>{i + 1}</td>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default Listcomponent;