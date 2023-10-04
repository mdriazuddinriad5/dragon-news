import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div >
            <div className="p-4 space-y-3 mb-6 ">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            <div className="p-4">
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a href="" className="flex items-center text-lg border rounded-t-lg p-4">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className="flex items-center text-lg p-4 border-x">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className="flex items-center text-lg p-4 border rounded-b-lg">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>

            <div className="p-4 space-y-3 mb-6 ">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;