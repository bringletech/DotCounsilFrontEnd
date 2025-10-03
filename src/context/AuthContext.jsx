/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [initializing, setInitializing] = useState(true);


    const hydrateAdmin = useCallback(async () => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            setAdmin(null);
            setLoading(false);
            setInitializing(false);
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.get("/api/v1/superAdmin/me");
            const fetchedAdmin =
                response?.data?.data?.admin ?? response?.data?.admin ?? null;
            setAdmin(fetchedAdmin);
        } catch (error) {
            console.error("Failed to fetch super admin profile", error);
            setAdmin(null);
            if (error?.response?.status === 401) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
            }
        } finally {
            setLoading(false);
            setInitializing(false);
        }
    }, []);

    useEffect(() => {
        hydrateAdmin();
    }, [hydrateAdmin]);

    const login  = (adminData) => {
        setAdmin(adminData);
        setInitializing(false);
    }

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }
    return (
        <AuthContext.Provider value={{admin, login, logout, loading, initializing, hydrateAdmin}}>
            {initializing ? null : children}
        </AuthContext.Provider>
    )
}