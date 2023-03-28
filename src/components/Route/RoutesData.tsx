import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import LoginView from "../../Pages/Login/Login";
import SignUP from "../../Pages/SignUp/SignUp";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";



export default function RoutesData() {
    return (
        <>

            <Routes>
                <Route path="/" element={<LoginView />} />
                <Route path="/sign_up" element={<SignUP />} />
                <Route element={<ProtectedRoutes loginStatus={true} />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

            </Routes>

        </>
    );
}
