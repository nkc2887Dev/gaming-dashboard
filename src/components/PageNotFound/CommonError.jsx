import { useRouter } from "next/router"
import React from "react"

const CommonError = ({ title, subtext }) => {
  const router = useRouter()
  return (
    <div className=" flex py-10 items-center justify-center flex-col h-screen  bg-secondary overflow-hidden">
      <div className="max-w-2xl m-auto py-10 px-6 text-center min-h-screen flex items-center justify-center z-10">
        <div className="text-center">
          <img
            src={`/next.svg`}
            className="m-auto w-full max-w-sm sm:max-w-md"
            alt="Error 404"
          />
          <h1 className="mt-8 text-2xl sm:text-3xl font-black">{title}</h1>
          <p className="text-sm font-semibold mt-2">{subtext}</p>
          <button onClick={() => router.push("/dashboard")} className="mt-7 mx-auto">Back to Home</button>
        </div>
      </div>
    </div>
  )
}

export default CommonError
