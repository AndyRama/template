"use client"
import React, { Fragment, useState, useEffect } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationMenu = [
  { href:'/', label:'Home'},
  { href:'/projects', label:'Projects'},
  { href:'/blog', label:'Blog'},
  { href:'/about', label:'About'},
  { href:'/contact', label:'Contact'},
]
export default function Navigation() {
  return (
    <div>
      <header role="banner" className="py-10 absolute w-full z-[3]">
        <div className="container px-4 3x-auto flex items-center justify-between">
          <div>
           <Link href="/" className="text-[22px] text-gray-700
             font-bold">Lemurian Agency<span className="text-orange-600">.</span>
            </Link>
          </div>
          <div className="flex">
            <ul role="list" className="flex hidden md:flex space-x-8">
              { navigationMenu.map((menu, index) => (
                <li key={menu.label}>
                  <Link href={menu.href}>{ menu.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
