import { Button, Checkbox, Label } from "flowbite-react";
import React from "react";
import { SiAuthelia } from "react-icons/si";
import CustomInput from "../../components/common/CustomInput";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <SiAuthelia className="text-5xl text-blue-600" />
        <h1 className="text-2xl font-bold mb-10 text-blue-600">Login</h1>
      </div>
      {/* *********for the input using form  */}
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            label={"Enter Your Email"}
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <CustomInput
            label={"Enter your Password"}
            type="password"
            name="password"
            placeholder="password"
          />
        </div>

        <div>
          <div className=" flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
      <div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <a
            href="/Registration"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
