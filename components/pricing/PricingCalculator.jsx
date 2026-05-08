"use client";
import { useState } from "react";

const countries = [
  { name: "India", code: "IN", currency: "INR", symbol: "₹" },
  { name: "United States", code: "US", currency: "USD", symbol: "$" },
  { name: "United Kingdom", code: "GB", currency: "GBP", symbol: "£" },
  { name: "Canada", code: "CA", currency: "CAD", symbol: "C$" },
  { name: "Australia", code: "AU", currency: "AUD", symbol: "A$" },
];

const platforms = [
  { name: "Wati", markup: 0.20 },
  { name: "Interakt", markup: 0.18 },
  { name: "Gupshup", markup: 0.22 },
  { name: "WatBot", markup: 0.25 },
];

const baseRates = {
  IN: { marketing: 0.7846, utility: 0.1150, service: 0.0, authentication: 0.1150 },
  US: { marketing: 0.0524, utility: 0.0077, service: 0.0, authentication: 0.0077 },
  GB: { marketing: 0.0412, utility: 0.0060, service: 0.0, authentication: 0.0060 },
  CA: { marketing: 0.0698, utility: 0.0102, service: 0.0, authentication: 0.0102 },
  AU: { marketing: 0.0724, utility: 0.0106, service: 0.0, authentication: 0.0106 },
};

export default function PricingCalculator() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [conversations, setConversations] = useState(10000);

  const calculatePricing = () => {
    const rates = baseRates[selectedCountry.code];
    const platformMarkup = selectedPlatform.markup;
    
    const messegyPricing = {
      marketing: rates.marketing * conversations,
      utility: rates.utility * conversations,
      service: rates.service * conversations,
      authentication: rates.authentication * conversations,
    };

    const competitorPricing = {
      marketing: rates.marketing * conversations * (1 + platformMarkup),
      utility: rates.utility * conversations * (1 + platformMarkup),
      service: rates.service * conversations * (1 + platformMarkup),
      authentication: rates.authentication * conversations * (1 + platformMarkup),
    };

    const savings = {
      marketing: competitorPricing.marketing - messegyPricing.marketing,
      utility: competitorPricing.utility - messegyPricing.utility,
      service: competitorPricing.service - messegyPricing.service,
      authentication: competitorPricing.authentication - messegyPricing.authentication,
    };

    return { messegyPricing, competitorPricing, savings };
  };

  const { messegyPricing, competitorPricing, savings } = calculatePricing();

  const formatCurrency = (amount) => {
    return `${selectedCountry.symbol}${amount.toFixed(4)}`;
  };

  return (
    <section className="pricing-calculator-section" style={{ padding: "80px 0", background: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          {/* Left Side - Text Content */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="calculator-content">
              <h2 className="main-heading">Pay 0% Markup Fees</h2>
              <h3 className="sub-heading">Compare Messegy with Others</h3>
              <p className="description">
                Save up to 35% per conversation with our 0% markup fees on WhatsApp Official API. 
                No hidden charges, pay directly to Meta.
              </p>
              
              <div className="features-list mb-4">
                <div className="feature-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#178d72", marginRight: "8px" }}>
                    <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  No Markup Fees
                </div>
                <div className="feature-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#178d72", marginRight: "8px" }}>
                    <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Pay Directly to Meta
                </div>
                <div className="feature-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#178d72", marginRight: "8px" }}>
                    <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Save upto 35% per Conversation
                </div>
              </div>
              
              <small className="disclaimer text-muted">
                *Pricing varies by country. 24-hour conversation window applies.
              </small>
            </div>
          </div>

          {/* Right Side - Controls and Table */}
          <div className="col-lg-7">
            <div className="calculator-controls">
              {/* Dropdown Controls */}
              <div className="row mb-4">
                <div className="col-md-4 col-sm-6 mb-3">
                  <label className="form-label">Country</label>
                  <select 
                    className="form-select"
                    value={selectedCountry.name}
                    onChange={(e) => {
                      const country = countries.find(c => c.name === e.target.value);
                      setSelectedCountry(country);
                    }}
                  >
                    {countries.map(country => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="col-md-4 col-sm-6 mb-3">
                  <label className="form-label">Currency</label>
                  <select 
                    className="form-select"
                    value={selectedCountry.currency}
                    onChange={(e) => {
                      const country = countries.find(c => c.currency === e.target.value);
                      setSelectedCountry(country);
                    }}
                  >
                    {countries.map(country => (
                      <option key={country.currency} value={country.currency}>
                        {country.currency} ({country.symbol})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="col-md-4 col-sm-6 mb-3">
                  <label className="form-label">Platform</label>
                  <select 
                    className="form-select"
                    value={selectedPlatform.name}
                    onChange={(e) => {
                      const platform = platforms.find(p => p.name === e.target.value);
                      setSelectedPlatform(platform);
                    }}
                  >
                    {platforms.map(platform => (
                      <option key={platform.name} value={platform.name}>
                        {platform.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Slider Control */}
              <div className="row mb-4">
                <div className="col-12">
                  <label className="form-label">Number of Conversations: <strong>{conversations.toLocaleString()}</strong></label>
                  <input
                    type="range"
                    className="form-range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={conversations}
                    onChange={(e) => setConversations(parseInt(e.target.value))}
                  />
                  <div className="d-flex justify-content-between">
                    <small>1,000</small>
                    <small>100,000</small>
                  </div>
                  <p className="text-center mt-2">
                    <strong>{selectedPlatform.name}</strong> charges extra {((selectedPlatform.markup) * 100).toFixed(0)}% on Official WhatsApp API
                  </p>
                </div>
              </div>

              {/* Pricing Comparison Table */}
              <div className="pricing-comparison-table">
                <div className="table-responsive">
                  <table className="table table-bordered" style={{ marginBottom: 0, borderCollapse: 'separate', borderSpacing: 0 }}>
                    <thead style={{ backgroundColor: '#178d72' }}>
                      <tr>
                        <th style={{ backgroundColor: '#178d72', color: 'white', fontWeight: 600, border: 'none', padding: '0.6rem 0.5rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Category</th>
                        <th style={{ backgroundColor: '#178d72', color: 'white', fontWeight: 600, border: 'none', padding: '0.6rem 0.5rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Messegy</th>
                        <th style={{ backgroundColor: '#178d72', color: 'white', fontWeight: 600, border: 'none', padding: '0.6rem 0.5rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>{selectedPlatform.name}</th>
                        <th style={{ backgroundColor: '#178d72', color: 'white', fontWeight: 600, border: 'none', padding: '0.6rem 0.5rem', fontSize: '0.85rem', whiteSpace: 'normal', minWidth: '110px' }}>Savings with Messegy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}><strong>Marketing</strong></td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(messegyPricing.marketing)}</td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(competitorPricing.marketing)}</td>
                        <td style={{ backgroundColor: '#e8f5f1', color: '#178d72', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem', fontWeight: 'bold' }}>{formatCurrency(savings.marketing)}</td>
                      </tr>
                      <tr>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}><strong>Utility</strong></td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(messegyPricing.utility)}</td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(competitorPricing.utility)}</td>
                        <td style={{ backgroundColor: '#e8f5f1', color: '#178d72', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem', fontWeight: 'bold' }}>{formatCurrency(savings.utility)}</td>
                      </tr>
                      <tr>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}><strong>Service (UIC)</strong></td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(messegyPricing.service)}</td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(competitorPricing.service)}</td>
                        <td style={{ backgroundColor: '#e8f5f1', color: '#178d72', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem', fontWeight: 'bold' }}>{formatCurrency(savings.service)}</td>
                      </tr>
                      <tr>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}><strong>Authentication</strong></td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(messegyPricing.authentication)}</td>
                        <td style={{ backgroundColor: 'white', color: '#495057', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem' }}>{formatCurrency(competitorPricing.authentication)}</td>
                        <td style={{ backgroundColor: '#e8f5f1', color: '#178d72', padding: '0.6rem 0.5rem', verticalAlign: 'middle', borderColor: '#e9ecef', fontSize: '0.85rem', fontWeight: 'bold' }}>{formatCurrency(savings.authentication)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-calculator-section .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #178d72;
        }
        
        .pricing-calculator-section .sub-heading {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }
        
        .pricing-calculator-section .description {
          font-size: 1rem;
          color: #6c757d;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .calculator-content {
          padding-right: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          font-weight: 500;
          color: #495057;
          font-size: 1rem;
        }
        
        .disclaimer {
          font-size: 0.8rem;
          font-style: italic;
          color: #6c757d;
        }
        
        .calculator-controls {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
          height: 100%;
        }
        
        .form-select {
          border-radius: 6px;
          border: 1px solid #dee2e6;
          padding: 0.5rem 0.75rem;
          font-size: 0.9rem;
        }
        
        .form-range {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
        }
        
        .form-range::-webkit-slider-thumb {
          width: 20px;
          height: 20px;
          background: #178d72;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .pricing-comparison-table {
          background: white;
          padding: 0;
          border-radius: 8px;
          margin-top: 1rem;
        }
        
        .table {
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .pricing-calculator-section .main-heading {
            font-size: 2rem;
          }
          
          .pricing-calculator-section .sub-heading {
            font-size: 1.5rem;
          }
          
          .calculator-content {
            padding-right: 0;
            margin-bottom: 2rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .features-list {
            gap: 1rem;
            align-items: flex-start;
          }
          
          .calculator-controls {
            padding: 1.5rem;
            height: auto;
          }
          
          .pricing-comparison-table {
            padding: 1rem;
            margin-top: 1rem;
          }
          
          .table {
            font-size: 0.85rem;
          }
          
          .table th,
          .table td {
            padding: 0.5rem 0.25rem;
          }
          
          .form-select {
            font-size: 0.9rem;
            padding: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
