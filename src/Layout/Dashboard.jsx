import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* left side */}
           <div className="w-64 min-h-screen bg-orange-100">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaAd></FaAd>Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaList></FaList>My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/Dell"><FaSearch></FaSearch>Products</NavLink>
                    </li>
                </ul>
            </div> 
            {/* right side */}
            <div className="flex-1 bg-yellow-200 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;