import React from 'react'


export const Footer = () => { 
    let footerStyle= {
        position :"relative",
        top :"100vh",
        width :"100%",
        border:"2px"
    }
    return (
        <footer className="bg-dark text-light py-3">
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}