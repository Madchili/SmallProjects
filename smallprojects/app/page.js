'use client'

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/usercontext";


export default function Start() {

  const { userData, setUserData } = useUserContext();
  // const userData = null

  const router = useRouter()

  useEffect(() => {
    if (!userData) {
      router.push("/login")
    }
    else {
    router.push("/home")
  }
  }), [userData]

  return (
    <div>

    </div>   
  )
}