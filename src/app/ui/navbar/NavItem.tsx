import React from 'react'

export default function NavItem({text, onClick , active = ""}: {
    active: string;
    text: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <li className="nav-item">
        <a href={`https://mtag.me/${text.toLowerCase()}`} onClick={onClick} className={`nav-link ${active}`}>
            {text}
        </a>{" "}
    </li>
  )
}
