import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/doogsan-logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "Tickets", href: "/tickets" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Doogsan Enterprise" className="h-12 w-12 object-contain rounded-lg" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                Doogsan Enterprise
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/checkout">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
