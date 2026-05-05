"use client";
import { useState } from "react";
import DesktopMenu from "@/components/common/navigation/desktop-nav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import { FaWhatsapp, FaRobot, FaBullhorn, FaChartLine, FaUsers, FaCog, FaHandshake, FaBook, FaBlog, FaChartBar, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="site-header site-header--menu-center bg-white sticky top-0 z-50" id="sticky-menu">
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
            <NavItem dropdown title="Resources" pill>
              <Dropdown>
                <div className="dropdown-content">
                  <div className="promo-container">
                    <div className="promo-left">
                      <div className="sub-menu--item">
                        <a href="/blogs">
                          <span className="dropdown-icon"><FaBlog /></span>
                          <span className="menu-item-text">Blogs</span>
                        </a>
                      </div>
                      <div className="sub-menu--item">
                        <a href="/case-studies">
                          <span className="dropdown-icon"><FaChartBar /></span>
                          <span className="menu-item-text">Case Studies</span>
                        </a>
                      </div>
                      <div className="sub-menu--item">
                        <a href="/resource-center">
                          <span className="dropdown-icon"><FaBookOpen /></span>
                          <span className="menu-item-text">Resource Center</span>
                        </a>
                      </div>
                      <div className="sub-menu--item">
                        <a href="/faqs">
                          <span className="dropdown-icon"><FaQuestionCircle /></span>
                          <span className="menu-item-text">FAQs</span>
                        </a>
                      </div>
                    </div>
                    <div className="promo-right resources-promo">
                      <div className="promo-content">
                        <h3>See Messegy In Action With A Personalized Demo!</h3>
                        <a href="/contact" className="promo-link">
                          Book Now <span className="promo-arrow">→</span>
                        </a>
                      </div>
                      <div className="promo-images">
                        <img src="/images/v1/dashboard.png" alt="Messegy Dashboard" className="promo-float-img img-1" />
                        <img src="/images/about/aboutthumb.png" alt="Messegy Platform" className="promo-float-img img-2" />
                      </div>
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
