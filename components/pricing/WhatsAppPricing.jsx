"use client";
import { useState } from "react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "STARTER",
    description: "Small teams",
    monthlyPrice: 99,
    yearlyPrice: 950,
    features: [
      "Upto 1,000 contacts",
      "Basic automation",
      "1 WhatsApp number",
      "Email support",
      "Basic analytics"
    ],
    highlighted: false,
    cta: {
      text: "Start Free Trial",
      href: "/register"
    }
  },
  {
    name: "GROWTH",
    description: "Most Popular",
    monthlyPrice: 299,
    yearlyPrice: 2870,
    features: [
      "5,000 contacts",
      "AI Chatbot",
      "Broadcast campaigns",
      "3 agents",
      "Advanced analytics",
      "Priority support"
    ],
    highlighted: true,
    cta: {
      text: "Start Free Trial",
      href: "/register"
    }
  },
  {
    name: "ENTERPRISE",
    description: "Custom solution",
    price: "Custom",
    period: "",
    features: [
      "Unlimited contacts",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom features",
      "White-label options"
    ],
    highlighted: false,
    cta: {
      text: "Contact Sales",
      href: "/contact"
    }
  }
];

export default function WhatsAppPricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="pricing-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-5">
              <h2 className="main-heading">Choose Your Plan</h2>
              <p className="sub-heading">Select the perfect plan for your WhatsApp marketing needs</p>
            </div>
          </div>
        </div>
        
        {/* Billing Toggle */}
        <div className="row justify-content-center mb-5">
          <div className="col-auto">
            <div className="billing-toggle">
              <button 
                className={`toggle-btn ${billingCycle === "monthly" ? "active" : ""}`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button 
                className={`toggle-btn ${billingCycle === "yearly" ? "active" : ""}`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
                <span className="savings-badge">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center g-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`pricing-card ${plan.highlighted ? 'featured' : ''} h-100`}>
                {plan.highlighted && (
                  <div className="badge-popular">
                    <span>Most Popular</span>
                  </div>
                )}
                
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="price">
                    {plan.price === "Custom" ? (
                      <>
                        <span className="amount">{plan.price}</span>
                      </>
                    ) : (
                      <>
                        <span className="currency">$</span>
                        <span className="amount">
                          {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="period">
                          /{billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="pricing-body">
                  <ul className="features-list">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pricing-footer">
                  <Link 
                    href={plan.cta.href} 
                    className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline-primary'} w-100`}
                    style={{
                      display: 'inline-block',
                      padding: '14px 28px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      border: plan.highlighted ? '2px solid transparent' : '2px solid #667eea',
                      fontSize: '0.95rem',
                      letterSpacing: '0.5px',
                      background: plan.highlighted ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                      color: plan.highlighted ? 'white' : '#667eea',
                      boxShadow: plan.highlighted ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none'
                    }}
                  >
                    {plan.cta.text.toUpperCase()}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .pricing-section {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .billing-toggle {
          display: inline-flex;
          background: white;
          border-radius: 50px;
          padding: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        
        .toggle-btn {
          padding: 12px 24px;
          border: none;
          background: transparent;
          color: #6c757d;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          font-size: 0.95rem;
        }
        
        .toggle-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .toggle-btn:hover:not(.active) {
          color: #007bff;
        }
        
        .savings-badge {
          position: absolute;
          top: -12px;
          right: -35px;
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          font-size: 0.65rem;
          padding: 4px 8px;
          border-radius: 12px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(40, 167, 69, 0.4);
          z-index: 10;
        }
        
        .main-heading {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }
        
        .sub-heading {
          font-size: 1.25rem;
          color: #6c757d;
          font-weight: 400;
          margin-top: 0.5rem;
        }
        
        .pricing-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          border: 2px solid transparent;
        }
        
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }
        
        .pricing-card.featured {
          border-color: #667eea;
        }
        
        .pricing-card.featured:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.25);
          border-color: #764ba2;
        }
        
        .badge-popular {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 5px 20px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .pricing-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }
        
        .plan-description {
          color: #6c757d;
          margin-bottom: 1.5rem;
        }
        
        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
        }
        
        .currency {
          font-size: 1.5rem;
          font-weight: 600;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .amount {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .period {
          font-size: 1rem;
          color: #6c757d;
        }
        
        .pricing-body {
          margin-bottom: 2rem;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .features-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.95rem;
          color: #495057;
        }
        
        .features-list li:last-child {
          border-bottom: none;
        }
        
        .check-icon {
          color: #28a745;
          flex-shrink: 0;
        }
        
        .pricing-footer {
          margin-top: auto;
        }
        
        .btn {
          display: inline-block;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        .btn-outline-primary {
          background: transparent;
          color: #667eea;
          border-color: #667eea;
        }
        
        .btn-outline-primary:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 0;
          }
          
          .main-heading {
            font-size: 2.25rem;
          }
          
          .sub-heading {
            font-size: 1.1rem;
          }
          
          .pricing-card.featured {
            transform: none;
          }
          
          .pricing-card.featured:hover {
            transform: translateY(-5px);
          }
          
          .amount {
            font-size: 2.5rem;
          }
          
          .toggle-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
