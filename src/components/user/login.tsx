"use client";

import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import logo from "@/assets/image/logo.jpg";
import Toast from "@/utils/toast";
import { useRouter } from "next/navigation";
import { NAVIGATION_PATHS } from "@/utils/constants/routes";
import { LoginFormInputs } from "@/@types/login";
import { loginSchema } from "@/utils/schemas/login";

const generateCaptcha = () => ({
  num1: Math.floor(Math.random() * 100) + 1,
  num2: Math.floor(Math.random() * 10) + 1,
});

export default function LoginForm() {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCaptcha(generateCaptcha());
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    // getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (errors.username) {
      Toast.error(errors.username.message);
    } else if (errors.password) {
      Toast.error(errors.password.message);
    } else if (errors.captchaAnswer) {
      Toast.error(errors.captchaAnswer.message);
    }
  }, [errors]);

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setValue("captchaAnswer", "");
  }, [setValue]);

  const onSubmit = (data: LoginFormInputs) => {
    if (Number(data.captchaAnswer) !== captcha.num1 + captcha.num2) {
      Toast.error("Invalid CAPTCHA");
      refreshCaptcha();
      return;
    }

    setLoader(true);
    setTimeout(() => {
      Toast.success("Login successful");
      setLoader(false);
      router.push(NAVIGATION_PATHS.DASHBOARD);
    }, 1500);
  };

  if (!isClient) return null;

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xs bg-black rounded-md p-8 shadow-xl border-4 border-gray-700">
        {/* Logo */}
        <div className="flex justify-center mb-4 text-white">
          <Image
            src={logo}
            alt="GAJANAND"
            width={200}
            height={40}
            priority
            className="rounded-md"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div className="space-y-1">
            <label className="text-white text-sm">User Name:</label>
            <Input
              type="text"
              {...register("username")}
              className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-white text-sm">Password:</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md pr-10 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#73819A]"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Captcha */}
          <div className="space-y-1">
            <div className="flex items-center justify-between bg-gray-200 rounded-md py-2 px-3 border border-gray-400">
              <span className="text-black">
                {captcha.num1} + {captcha.num2}
              </span>
              <span className="text-black">=</span>
              <Input
                type="text"
                {...register("captchaAnswer")}
                className="w-20 bg-white border border-gray-400 text-black px-2 py-1 rounded-md focus:outline-none"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={refreshCaptcha}
                className="h-8 w-8 p-1 bg-transparent hover:bg-transparent focus:bg-transparent"
              >
                <RefreshCw className="h-4 w-4 text-[#73819A]" />
              </Button>
            </div>
          </div>

          {/* Login Button */}
          <div className="space-y-1">
            <GradientButton label="LOGIN" insideLoader={loader} />
          </div>
        </form>
      </div>
    </div>
  );
}
