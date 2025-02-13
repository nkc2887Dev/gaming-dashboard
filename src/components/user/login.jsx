"use client"

import { useState } from "react"
import Input from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RefreshCw, Eye, EyeOff } from "lucide-react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState("")
  const [captcha, setCaptcha] = useState({
    num1: 10,
    num2: 2,
  })

  const refreshCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 100) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    })
    setCaptchaAnswer("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const correctAnswer = captcha.num1 + captcha.num2
    if (Number.parseInt(captchaAnswer) === correctAnswer) {
      // Handle login logic here
      console.log("Login successful")
    } else {
      alert("Incorrect CAPTCHA answer")
      refreshCaptcha()
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xs bg-black rounded-md p-6 shadow-xl border-4 border-gray-700">
        {/* Logo */}
        <div className="flex justify-center mb-4 text-white">
          <img src="/logo.png" alt="GAJANAND" className="h-10" />
        </div>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="space-y-1">
            <label className="text-white text-sm">User Name:</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md focus:outline-none"
              required
            />
          </div>
  
          {/* Password */}
          <div className="space-y-1">
            <label className="text-white text-sm">Password:</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md pr-10 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
  
          {/* Captcha */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 bg-gray-200 rounded-md p-2 border border-gray-400">
                <span className="text-black">{captcha.num1} + {captcha.num2} = ?</span>
              <Input
                type="text"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="w-20 bg-white border border-gray-400 text-black px-2 py-1 rounded-md focus:outline-none"
                required
              />
              <Button type="button" variant="ghost" size="icon" onClick={refreshCaptcha} className="h-8 w-8 p-1">
                <RefreshCw className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
  
          {/* Login Button */}
          <div className="space-y-1">
          <Button
            type="submit"
            className="w-full bg-gradient-to-b from-[#00a3cc] to-[#008fb3] hover:from-[#008fb3] hover:to-[#007a99] text-white font-medium py-2 rounded-md shadow-md"
          >
            LOGIN
          </Button>
          </div>
        </form>
      </div>
    </div>
  );  
}