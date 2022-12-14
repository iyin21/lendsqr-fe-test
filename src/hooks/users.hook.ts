import axios from 'axios';
import { useState, useEffect } from 'react';
import { UserResponse } from '../types/user.type';

const baseUrl = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1';

function useGetUsers() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState<UserResponse[]>([]);
    const[error, setError]= useState("");

    const getUsers = () => {
        setIsLoading(true);
        axios
            .get<UserResponse[]>(`${baseUrl}/users`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setUserData(response.data);
            })
            .catch((err) => {
                setError(err.message || 'An error occured!')
                
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    useEffect(() => {
        getUsers();
    }, []);
    return { isLoading, userData, error };
}

function useGetUserDetails({ id }: { id: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState<UserResponse>();
    const[error, setError]= useState("");
    const getUserDetails = () => {
        setIsLoading(true);
        axios
            .get<UserResponse>(`${baseUrl}/users/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setUserData(response.data);
                //localStorage.setItem('userDetails', JSON.stringify(response.data));
            })
            .catch((err) => {
                setError(err.message || 'An error occured!')
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    useEffect(() => {
        getUserDetails();
    }, []);
    return { isLoading, userData, error };
}
export { useGetUsers, useGetUserDetails };
