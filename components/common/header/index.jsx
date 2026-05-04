"use client";
import { useState } from "react";
import DesktopMenu from "@/components/common/navigation/desktop-nav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import { FaWhatsapp, FaRobot, FaBullhorn, FaChartLine, FaUsers, FaCog, FaHandshake, FaBook } from 'react-icons/fa';

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="site-header site-header--menu-center bg-white border-b border-gray-200 sticky top-0 z-50" id="sticky-menu">
      <div className="container mx-auto px-4">
        <nav className="navbar flex items-center justify-between">
          {/* Logo */}
          <div className="logo-container">
            <HeaderLogo />
          </div>

          {/* Navigation */}
          <DesktopMenu>
            {/* Products Dropdown with Full Width */}
            <NavItem dropdown title="Products">
              <Dropdown>
                <div className="dropdown-content">
                  <div className="promo-container">
                    {/* Left side - Product categories */}
                    <div className="promo-left">
                      <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: 'var(--heading-color)' }}>Products</h4>
                      <div className="sub-menu--item">
                        <a href="/product/whatsapp-broadcast-software">
                          <span className="dropdown-icon"><FaWhatsapp /></span>
                          <span className="menu-item-text">WhatsApp Broadcast Software</span>
                        </a>
                      </div>
                      <div className="sub-menu--item">
                        <a href="/product/whatsapp-business-api">
                          <span className="dropdown-icon"><FaCog /></span>
                          <span className="menu-item-text">WhatsApp Business API</span>
                        </a>
                      </div>
                      <div className="sub-menu--item">
                        <a href="/product/whatsapp-chatbot-builder">
                          <span className="dropdown-icon"><FaRobot /></span>
                          <span className="menu-item-text">WhatsApp Chatbot Builder</span>
                        </a>
                      </div>
                    </div>
                    
                    {/* Right side - Promo content */}
                    <div className="promo-right">
                      <div className="promo-content">
                        <h3>Transform Your Business with WhatsApp</h3>
                        <p>Reach more customers, automate conversations, and grow your business with our powerful WhatsApp Business Platform.</p>
                        <button className="promo-button" onClick={() => window.location.href = '/contact'}>
                          Book a Demo
                        </button>
                      </div>
                      <img src="/images/about/aboutthumb.png" alt="Messegy WhatsApp Platform" className="promo-image" />
                    </div>
                  </div>
                </div>
              </Dropdown>
            </NavItem>

            {/* Other Navigation Items */}
            <NavItem title="Solutions" url="#" />
            <NavItem title="Integrations" url="#" />
            <NavItem title="Pricing" url="/pricing" />
            <NavItem title="Partnerships" url="#" />
            <NavItem dropdown title="Resources">
              <Dropdown>
                <div className="dropdown-content">
                  <div className="promo-container">
                    <div className="promo-left">
                      <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: 'var(--heading-color)' }}>Resources</h4>
                      <div className="sub-menu--item">
                        <a href="/blogs">
                          <span className="dropdown-icon"><FaBook /></span>
                          <span className="menu-item-text">Blog</span>
                        </a>
                      </div>
                      <div className="sub-menu--item">
                        <a href="/documentation">
                          <span className="dropdown-icon"><FaChartLine /></span>
                          <span className="menu-item-text">Documentation</span>
                        </a>
                      </div>
                      <div className="sub-menu--item">
                        <a href="/testimonials">
                          <span className="dropdown-icon"><FaUsers /></span>
                          <span className="menu-item-text">Testimonials</span>
                        </a>
                      </div>
                    </div>
                    <div className="promo-right">
                      <div className="promo-content">
                        <h3>Learn & Grow with Messegy</h3>
                        <p>Access guides, case studies, and best practices to maximize your WhatsApp marketing success.</p>
                        <button className="promo-button" onClick={() => window.location.href = '/blogs'}>
                          Explore Resources
                        </button>
                      </div>
                      <img src="/images/blog/blog-thumb-1.jpg" alt="Messegy Resources" className="promo-image" />
                    </div>
                  </div>
                </div>
              </Dropdown>
            </NavItem>
          </DesktopMenu>

          {/* Right Side Elements */}
          <div className="hidden lg:flex items-center space-x-4">
            <HeaderButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MobileNavbar menuItemsData={menuItemsData} title="messegy" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
