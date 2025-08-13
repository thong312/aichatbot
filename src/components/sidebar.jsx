export default function Sidebar() {
    return (
        <div
            className="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 mb-2">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    HR Helper
                </h5>
            </div>
            <nav className="flex flex-1 min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                {/* <div className="w-auto mb-2">
                    <Input label="Search"/>
                </div> */}
                <div className="relative block w-full">
                    <div role="button"
                        className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none bg-blue-900 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <button type="button"
                            className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900">
                            <div className="grid mr-4 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                    className="w-5 h-5">
                                    <path fillRule="evenodd"
                                        d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-white">
                                Chat
                            </p>
                            <span className="ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                                    stroke="currentColor" aria-hidden="true" className="w-4 h-4 mx-auto transition-transform rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 mt-auto">
                    <div className="grid mr-4 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            className="w-5 h-5">
                            <path fillRule="evenodd"
                                d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                    Log Out
                </div>
            </nav>
        </div>
    );
}
