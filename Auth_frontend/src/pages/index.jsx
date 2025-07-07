// Public Pages
export { default as HomePage } from "./Home";
export { default as PageNotFound } from "./PageNotFound";

// Auth Pages
export { default as LoginPage } from "./auth/login";
export { default as AuthLayout } from "./auth/AuthLayout";
export { default as RegistrationPage } from "./auth/Registration";
export { default as ForgotPasswordPage } from "./auth/forgot_password";
export { default as ResetPasswordPage } from "./auth/reset_passoword";
export { default as VerifyOTPPage } from "./auth/verifyEmail";
export { default as VerifyPhoneOtpPage } from "./auth/verifyPhone";

// Authenticated Layoutss
export { default as UserLayout } from "./userLayout";

// User Pages
export { default as UserProfile } from "./userDashboard/userProfile";

// Admin Pages
export { default as AdminProfile } from "./adminDashboard/AdminProfile";
export { default as AdminDashboard } from "./adminDashboard/dashbaord";
//export customNav
// export { default as CustomNav } from "../components/CustomNav";
