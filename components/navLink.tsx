import React from 'react'

type NavLinkProps = {
    children: React.ReactNode;
    warna: string;
    bg: string;
    klik?: () => void;
};

export default function NavLink(props: NavLinkProps) {
  return (
    <button onClick={props.klik} className={`px-7 py-2 text-sm ${props.warna} rounded-full ${props.bg}`}>
        {props.children}
    </button>
  )
}

// type NavbarProps = {
  
