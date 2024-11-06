import React from "react";
import "../styles.css";

// Dynamic date for the year

export default function Footer() {
    // This will get the current year, we can use this inside our JSX which is in out html
    const currentYear = new Date().getFullYear();

    // We use the standard html footer tag
    // We use the className to style the footer from the css
    return (
        <footer className="footer">
            <p className="footetext">
                © {currentYear} Duck Movies 🎥
            </p>
        </footer>
    );
    }