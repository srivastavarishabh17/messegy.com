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
              <h2>Choose Your Plan</h2>
              <p>Select the perfect plan for your WhatsApp marketing needs</p>
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
                  >
                    {plan.cta.text}
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
          top: -8px;
          right: -10px;
          background: #28a745;
          color: white;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: 700;
          white-space: nowrap;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }
        
        .section-title p {
          font-size: 1.1rem;
          color: #6c757d;
        }
        
        .pricing-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          border: 2px solid transparent;
        }
        
        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .pricing-card.featured {
          border-color: #007bff;
          transform: scale(1.05);
        }
        
        .pricing-card.featured:hover {
          transform: scale(1.05) translateY(-5px);
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
          color: #007bff;
        }
        
        .amount {
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a1a;
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
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .btn-outline-primary {
          background: transparent;
          color: #007bff;
          border-color: #007bff;
        }
        
        .btn-outline-primary:hover {
          background: #007bff;
          color: white;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 0;
          }
          
          .section-title h2 {
            font-size: 2rem;
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
        }
      `}</style>
    </div>
  );
}
