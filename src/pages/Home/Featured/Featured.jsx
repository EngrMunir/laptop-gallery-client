import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="featured products"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias eveniet fugiat accusantium pariatur. Placeat repellat eveniet magni blanditiis pariatur dolores excepturi suscipit inventore! Praesentium iste voluptate aspernatur dolore ipsa exercitationem quaerat consequatur maiores, ducimus delectus incidunt, perspiciatis consequuntur
                        consectetur asperiores nisi excepturi! Dicta porro, blanditiis hic vero fuga repellat.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;