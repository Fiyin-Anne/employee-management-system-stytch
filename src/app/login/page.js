import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GoogleButton from '../../components/GoogleAuth';

const LoginPage = () => {
    return (
        <div className="h-[calc(100vh-60px)] bg-base-300 w-full flex flex-col justify-center items-center space-y-9">
            <div className="font-mono text-m text-center">Log in to your EM-STYTCH account</div>
            <div className="w-1/2 p-6 m-auto bg-white rounded-md shadow-md flex flex-col justify-center items-center ring-2 ring-gray-800/50 lg:max-w-lg">
                <GoogleButton text={'Sign in with Gooogle'} />
                <div>
                    <Link href="/register" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Create a new account</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default LoginPage;
