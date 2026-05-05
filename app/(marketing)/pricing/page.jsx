"use client";
import WhatsAppPricing from "@/components/pricing/WhatsAppPricing";
import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import BreadCrumb from "@/components/common/Breadcrumb";

export default function PricingPage() {
  return (
    <>
      <Header />
      <BreadCrumb title="Pricing" />
      <WhatsAppPricing />
      
      {/* WhatsApp Conversation Charges Section */}
      <section className="conversation-charges-section" style={{ padding: "80px 0", background: "#f8f9fa" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-5">
                <h2 className="main-heading">WhatsApp Conversation Charges</h2>
                <p className="sub-heading">Transparent pricing for WhatsApp conversations</p>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6">
              <div className="charge-card" style={{ background: "white", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)", height: "100%", border: "2px solid transparent", transition: "all 0.3s ease" }}>
                <div className="charge-header" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "0.5rem" }}>Business Initiated</h3>
                  <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>Marketing, utility, or authentication messages</p>
                </div>
                <div className="charge-price" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: "700", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>$0.05</span>
                  <span style={{ fontSize: "1rem", color: "#6c757d" }}> / conversation</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Marketing messages
                  </li>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Utility messages
                  </li>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Authentication messages
                  </li>
                  <li style={{ padding: "12px 0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    24-hour conversation window
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="charge-card featured" style={{ background: "white", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)", height: "100%", border: "2px solid #667eea", transition: "all 0.3s ease" }}>
                <div className="charge-header" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "0.5rem" }}>User Initiated</h3>
                  <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>Customer starts the conversation</p>
                </div>
                <div className="charge-price" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: "700", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>$0.01</span>
                  <span style={{ fontSize: "1rem", color: "#6c757d" }}> / conversation</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Free for first 1,000 conversations/month
                  </li>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Unlimited conversation window
                  </li>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    No setup fees
                  </li>
                  <li style={{ padding: "12px 0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Pay only for what you use
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="charge-card" style={{ background: "white", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)", height: "100%", border: "2px solid transparent", transition: "all 0.3s ease" }}>
                <div className="charge-header" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "0.5rem" }}>Service Conversations</h3>
                  <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>Customer support and service</p>
                </div>
                <div className="charge-price" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: "700", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>$0.03</span>
                  <span style={{ fontSize: "1rem", color: "#6c757d" }}> / conversation</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Customer support queries
                  </li>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Order tracking
                  </li>
                  <li style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Resolutions & feedback
                  </li>
                  <li style={{ padding: "12px 0", color: "#495057", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "#28a745", flexShrink: 0 }}>
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    72-hour conversation window
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="charges-note" style={{ background: "white", borderRadius: "12px", padding: "2rem", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)" }}>
                <h4 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "#1a1a1a" }}>Important Notes</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ padding: "8px 0", color: "#495057" }}>• A conversation is a 24-hour messaging session between a business and a customer</li>
                  <li style={{ padding: "8px 0", color: "#495057" }}>• Business-initiated conversations include marketing, utility, and authentication messages</li>
                  <li style={{ padding: "8px 0", color: "#495057" }}>• User-initiated conversations are charged only after free tier (1,000 conversations/month)</li>
                  <li style={{ padding: "8px 0", color: "#495057" }}>• Prices may vary based on destination country and WhatsApp Business API provider</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <style jsx global>{`
        .conversation-charges-section .main-heading {
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
        
        .conversation-charges-section .sub-heading {
          font-size: 1.25rem;
          color: #6c757d;
          font-weight: 400;
          margin-top: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .conversation-charges-section .main-heading {
            font-size: 2.25rem;
          }
          
          .conversation-charges-section .sub-heading {
            font-size: 1.1rem;
          }
        }
        
        .charge-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }
        
        .charge-card.featured:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.25);
          border-color: #764ba2;
        }
        
        .charges-note {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .charges-note:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </>
  );
}
