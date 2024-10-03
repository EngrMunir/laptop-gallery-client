import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useProducts from "../../../hooks/useProducts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageProducts = () => {
    const [products,,refetch] = useProducts();
    const axiosSecure = useAxiosSecure();

    const handleDelete = item =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/product/${item._id}`)
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                      });
                }
            }
          });
    }

    return (
        <div>
            {/* <SectionTitle heading="Manage Products" subHeading="Hurry up"></SectionTitle> */}
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
                            <td>
                                <Link to={`/dashboard/updateProduct/${item._id}`}>
                                    <button className="btn btn-ghost bg-orange-500">
                                        <FaEdit className="text-white"></FaEdit> 
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg"><FaTrash className="text-red-600"></FaTrash></button>
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