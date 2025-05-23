const { createContext, useReducer, useContext } = require("react");

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  function signin() {}
  function signup() {}
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("not found auth-context ");
  }
  return context;
}
