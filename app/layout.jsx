"use client";
import {useSearchParams} from "next/navigation"

import './globals.css'

export default function RootLayout({ children }) {
  const router = useSearchParams();
  console.log(router);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
