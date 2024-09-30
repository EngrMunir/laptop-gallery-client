import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
    const { register, handleSubmit,reset, formState: { errors }, } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    
    const onSubmit = async(data) =>{
        console.log(data)
        // image upload to imagebb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'content-type':'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data to the server with the image
            const productInfo={
                name:data.name,
                price: parseFloat(data.price),
                processor: data.processor,
                ram: data.ram,
                storage:data.storage,
                graphicsCard:data.graphicsCard,
                display: data.display,
                operatingSystem:data.operatingSystem,
                brand: data.brand,
                batteryLife:data.batteryLife,
                weight:data.weight,
                description: data.description,
                category:data.category,
                image: res.data.data.display_url
            }
            const productRes= await axiosSecure.post('/product',productInfo);
            reset();
            if(productRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been saved`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" {...register('name',{required:true})} placeholder="brand and model" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register('price',{required:true})} placeholder="Price in BDT" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* Processor, RAM and Storage */}
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Processor</span>
                        </label>
                        <input type="text" {...register('processor',{required:true})} placeholder="type, generation and speed" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">RAM</span>
                        </label>
                        <input type="text" {...register('ram',{required:true})} placeholder="size and type" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Storage</span>
                        </label>
                        <input type="text" {...register('storage',{required:true})} placeholder="type and size" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* Graphics card, display and operating system */}
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Graphics Card(if applicable)</span>
                        </label>
                        <input type="text" {...register('graphicsCard')} placeholder="card info" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Display</span>
                        </label>
                        <input type="text" {...register('display',{required:true})} placeholder="size resolution" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Operating System</span>
                        </label>
                        <input type="text" {...register('operatingSystem')} placeholder="pre installed" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* Battery life and weight */}
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select defaultValue="default" {...register('brand')} className="select select-secondary w-full">
                            <option disabled value="default">Select Brand</option>
                            <option>HP</option>
                            <option>Lenovo</option>
                            <option>Dell</option>
                            <option>Asus</option>
                            <option>Apple</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Battery Life</span>
                        </label>
                        <input type="text" {...register('batteryLife')} placeholder="battery life" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Weight</span>
                        </label>
                        <input type="text" {...register('weight')} placeholder="weight" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="A short overview of the laptop main features"></textarea>
                </div>
                <div className="flex gap-5 my-5">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue="default" {...register('category')} className="select select-secondary w-full">
                            <option disabled value="default">Select Brand</option>
                            <option value="popular">Popular</option>
                            <option value="offered">Offered</option>
                            <option value="regular">Regular</option>
                        </select>
                    </div>
                    <input {...register('image',{required:true})} type="file"
                    className="file-input file-input-bordered file-input-secondary w-full my-8" />
                </div>
                
                <button className="btn">Add Items</button>
            </form>
        </div>
    );
};

export default AddProducts;