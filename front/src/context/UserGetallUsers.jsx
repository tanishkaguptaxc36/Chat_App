import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
function UserGetallUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get("jwt");
                const response = await axios.get("/api/user/allUsers", {
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAllUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error in UserGetallUsers: " + error);
            }
        };
        getUsers();
    }, []);
    return [allUsers, loading];
}

export default UserGetallUsers;