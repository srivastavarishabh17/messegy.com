"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle, FaChartLine, FaBullseye, FaFileAlt, FaRobot } from "react-icons/fa";
import HeadingComponent from "@/components/ui/HeadingComponent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function AiWhatsAppPlatform() {
  const [screenSize, setScreenSize] = useState({ width: 0 });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth });
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width < 1024;

  const features = [
    {
      icon: <FaRobot />,
      title: "AI Chatbots That Drive Conversions",
      description: "Intelligent chatbots that understand customer intent and convert conversations into sales"
    },
    {
      icon: <FaFileAlt />,
      title: "Forms That Convert Conversations into Leads",
      description: "Capture leads seamlessly through interactive forms within WhatsApp conversations"
    },
    {
      icon: <FaBullseye />,
      title: "Go Beyond Keywords with Intent-Based Automation",
      description: "Advanced AI that understands customer intent, not just keywords, for smarter automation"
    },
    {
      icon: <FaChartLine />,
      title: "Ready-to-Send Templates, Powered by AI",
      description: "AI-generated templates optimized for engagement and conversion rates"
    }
  ];

  return (
    <motion.section
      className="ai-whatsapp-platform"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        padding: isMobile ? "60px 20px" : "100px 40px",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        
        {/* Main Heading */}
        <motion.div 
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "60px" : "80px",
          }}
        >
          <HeadingComponent 
            size={isMobile ? "medium" : "large"}
            gap="0.3em"
            style={{ marginBottom: "20px" }}
          >
            <span>Elevate your CX with an</span>
            <span>AI-powered WhatsApp platform</span>
          </HeadingComponent>
        </motion.div>

        {/* Two Column Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.8fr 1.2fr",
          gap: isMobile ? "40px" : "60px",
          alignItems: "center",
        }}>
          
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            {/* Highlighted Section */}
            <div
              style={{
                backgroundColor: "#e8f5e8",
                padding: isMobile ? "20px" : "24px",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "12px",
                  fontFamily: "var(--font-DM-Sans), sans-serif",
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em",
                  margin: "0 0 12px 0",
                }}
              >
                Write, Launch, and Optimize with AI Copilot
              </h2>
              
              <p
                style={{
                  fontSize: isMobile ? "14px" : "15px",
                  lineHeight: "1.5",
                  color: "#333",
                  fontFamily: "var(--font-DM-Sans), sans-serif",
                  margin: 0,
                }}
              >
                Create better WhatsApp campaign content faster with your built-in AI assistant.
              </p>
            </div>

            {/* Features List */}
            <motion.div style={{ backgroundColor: "white", padding: "20px 0" }}>
              {features.map((feature, index) => (
                <div key={index}>
                  <motion.h3
                    variants={itemVariants}
                    style={{
                      fontSize: isMobile ? "16px" : "18px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      fontFamily: "var(--font-DM-Sans), sans-serif",
                      margin: "0 0 15px 0",
                      lineHeight: "1.3",
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  {index < features.length - 1 && (
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "#e0e0e0",
                        margin: "15px 0",
                      }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div variants={itemVariants}>
            <div style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            }}>
              {/* Main Image Container */}
              <div style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e8e8e8",
                borderRadius: "16px",
                padding: "16px",
                height: "350px",
                display: "flex",
                flexDirection: "column",
              }}>
                {/* Header */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #25d366, #128c7e)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}>
                    AI
                  </div>
                  <div>
                    <h3 style={{ 
                      margin: 0, 
                      fontSize: "22px", 
                      fontWeight: "700", 
                      color: "#1a1a1a",
                      fontFamily: "var(--font-DM-Sans), sans-serif",
                    }}>
                      Messegy Copilot
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      fontSize: "16px", 
                      color: "#6a6a6a",
                      fontFamily: "var(--font-DM-Sans), sans-serif",
                    }}>
                      Your AI-powered WhatsApp assistant
                    </p>
                  </div>
                </div>

                {/* Expanded Chat Preview */}
                <div style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  padding: "12px",
                  border: "1px solid #e8e8e8",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}>
                  <div style={{
                    backgroundColor: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #e8e8e8",
                    fontSize: "12px",
                    color: "#1a1a1a",
                    maxWidth: "80%",
                  }}>
                    Hi! I'm your AI assistant. I can help you create personalized WhatsApp campaigns that drive engagement and conversions.
                  </div>
                  <div style={{
                    backgroundColor: "#25d366",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "white",
                    alignSelf: "flex-end",
                    maxWidth: "70%",
                  }}>
                    That sounds great! Can you show me how to get started?
                  </div>
                  <div style={{
                    backgroundColor: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #e8e8e8",
                    fontSize: "12px",
                    color: "#1a1a1a",
                    maxWidth: "80%",
                  }}>
                    Absolutely! Let me guide you through creating your first AI-powered campaign in just a few simple steps.
                  </div>
                  <div style={{
                    backgroundColor: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #e8e8e8",
                    fontSize: "12px",
                    color: "#1a1a1a",
                    maxWidth: "80%",
                  }}>
                    First, we'll set up your campaign goals and target audience. Then I'll help you craft compelling messages using AI-powered templates.
                  </div>
                  <div style={{
                    backgroundColor: "#25d366",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "white",
                    alignSelf: "flex-end",
                    maxWidth: "60%",
                  }}>
                    Perfect! Let's begin.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AiWhatsAppPlatform;
