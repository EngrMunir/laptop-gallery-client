import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useProducts from "../../../hooks/useProducts";

const ManageProducts = () => {
    const [products] = useProducts();

    const handleDelete = id =>{
        console.log(id)
    }

    return (
        <div>
            <SectionTitle heading="Manage Products" subHeading="Hurry up"></SectionTitle>
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((item, index) => <tr key={item._id}>
                            <th>{index+1}</th>
                            <td>
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={item.image}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><FaEdit></FaEdit> </td>
                            <td>
                                <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost"><FaTrash className="text-red-600"></FaTrash></button>
                            </td>
                        </tr>)
                    } 
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;