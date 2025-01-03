import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import UserGetallUsers from "../../context/UserGetallUsers.jsx";
import Useconvo from '../../manage/Useconvo.js';

function Search() {
    const [search, setSearch] = useState("");
    const [allUsers] = UserGetallUsers();
    const { setSelectedconvo } = Useconvo();
    console.log(allUsers);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        const conversation = allUsers.find((user) =>
            user.name?.toLowerCase().includes(search.toLowerCase())
        );
        if (conversation) {
            setSelectedconvo(conversation);
            setSearch("");
        } else {
           alert("No results found");
        }
    };



    return (
        <div className="[10vh]">
            <div className="px-6 py-4">
                <form onSubmit={handleSubmit}>
                    <div className='flex space-x-3'>

                        <label className="input input-bordered flex items-center gap-2 w-[90%]">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </label>
                        <button> <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 " />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search
