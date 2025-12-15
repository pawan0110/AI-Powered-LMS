import React, { useEffect } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';

import { setUserData, setLoading } from "../redux/userSlice.js";
import { serverUrl } from "../config";


const getCurrentUser = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setLoading(true));
      try {
        const result = await axios.get(`${serverUrl}/api/user/getcurrentuser`, { withCredentials: true });
        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchUser()
  },[])
}

export default getCurrentUser