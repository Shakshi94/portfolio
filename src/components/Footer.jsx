export default function Footer() {
    return (
        <div className="text-white bg-black w-screen z-50 max-w-screen-2xl mx-auto md:px-20 h-20 flex items-center justify-center">
            <div className="flex flex-wrap justify-center ">
                <p className="font-bold hidden lg:block">
                    Created By <span className="text-green-600">Shakshi Vishwakarma</span> |  &#169; 2024 All rights reserved.
                </p>
                <p className="font-bold lg:hidden">
                    Created By <span className="text-green-600">Shakshi Vishwakarma &nbsp;</span>
                </p>
                <p className="font-bold  lg:hidden">
                    | &#169; 2024 All rights reserved
                </p>
            </div>   
        </div>
    );
}
