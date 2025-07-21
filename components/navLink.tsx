import React from 'react'

type NavLinkProps = {
    children: React.ReactNode;
    warna: string;
    bg: string;
    klik?: () => void;
};

export default function NavLink(props: NavLinkProps) {
  return (
    <button onClick={props.klik} className={`px-5 py-2 text-sm font-medium ${props.warna} rounded-full ${props.bg}`}>
        {props.children}
    </button>
  )
}
