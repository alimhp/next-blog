"use client";

import toast from "react-hot-toast";
import { getUserApi, signinApi, signupApi } from "../services/authServices";

const { createContext, useReducer, useContext, useEffect } = require("react");

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
  }
};

const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
    } catch (error) {
      dispatch({ type: "rejected", payload: error?.response?.data?.message });
      toast.error(error?.response?.data?.message);
    }
  }
  async function signup(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
    } catch (error) {
      dispatch({ type: "rejected", payload: error?.response?.data?.message });
      toast.error(error?.response?.data?.message);
    }
  }
  async function getUser() {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      dispatch({ type: "rejected", payload: error?.response?.data?.message });
      toast.error(error?.response?.data?.message);
    }
  }
  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("not found auth-context ");
  }
  return context;
}
