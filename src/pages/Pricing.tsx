import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CreditCard, Clock, CheckCircle2, ArrowRight, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import '../styles/Pricing.css';

/**
 * Pricing Page Component
 * Provides a clear breakdown of hardware and hosting costs.
 * Includes an interactive ROI/Investment calculator to estimate total costs based on unit count.
 */
const Pricing = () => {
    // Current number of units selected in the calculator
    const [units, setUnits] = useState<number>(1);
    // Responsive state for mobile layout adjustments
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Price constant definitions (ZAR)
    const DEVICE_COST = 1455;
    const MONTHLY_HOSTING = 58;

    // Derived calculator values
    const totalBaseCost = units * DEVICE_COST;
    const totalMonthlyCost = units * MONTHLY_HOSTING;

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className={`pricing-hero ${isMobile ? 'mobile' : ''}`}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <h1 className="hero-title">Transparent <span className="text-gradient">Pricing</span></h1>
                        <p className="hero-subtitle">
                            Scalable temperature tracking solutions for businesses of all sizes. No hidden fees, just reliable cold chain integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Overview */}
            <section className="section-padding">
                <div className="container">
                        <div className="pricing-grid">
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="pricing-card"
                            >
                                <div className="card-header">
                                    <div className="title-row">
                                        <Smartphone size={isMobile ? 32 : 28} />
                                        <h2>Hardware Cost</h2>
                                    </div>
                                    <p className="price-tag">R1,455.00 <span className="price-type">/ unit</span></p>
                                    <p className="price-subtitle">Once-off purchase per device</p>
                                </div>
                                <div className="card-body">
                                    <ul className="feature-list">
                                        <li><CheckCircle2 size={18} /> NIST-Traceable Sensors</li>
                                        <li><CheckCircle2 size={18} /> Long-life Battery (5 Years)</li>
                                        <li><CheckCircle2 size={18} /> Robust IP67 Waterproof Casing</li>
                                        <li><CheckCircle2 size={18} /> 12-Month Warranty</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="pricing-card"
                            >
                                <div className="card-header">
                                    <div className="title-row">
                                        <Zap size={isMobile ? 32 : 28} />
                                        <h2>Hosting Service</h2>
                                    </div>
                                    <p className="price-tag">R58.00 <span className="price-type">/ month</span></p>
                                    <p className="price-subtitle">Per unit recurring service fee</p>
                                </div>
                                <div className="card-body">
                                    <ul className="feature-list">
                                        <li><CheckCircle2 size={18} /> Real-time Dashboard Access</li>
                                        <li><CheckCircle2 size={18} /> SMS, Email, WhatsApp & Voice Alerts</li>
                                        <li><CheckCircle2 size={18} /> Automated Weekly Reports</li>
                                        <li><CheckCircle2 size={18} /> Secure Data Hosting & API</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="calculator-section section-padding">
                <div className="container">
                    <div className="calculator-wrapper glass">
                        <div className="calculator-header">
                            <Calculator size={32} color="var(--brand-blue-main)" />
                            <h2>Cost <span className="text-gradient">Calculator</span></h2>
                            <p>Estimate your initial investment and monthly recurring costs.</p>
                        </div>
                        
                        <div className="calculator-content">
                            <div className="input-group">
                                <label htmlFor="unit-input">Number of Units</label>
                                <div className="input-with-controls">
                                    <button 
                                        onClick={() => setUnits(Math.max(1, units - 1))}
                                        className="control-btn"
                                    > - </button>
                                    <input 
                                        id="unit-input"
                                        type="number" 
                                        min="1" 
                                        value={units} 
                                        onChange={(e) => setUnits(Math.max(1, parseInt(e.target.value) || 0))}
                                    />
                                    <button 
                                        onClick={() => setUnits(units + 1)}
                                        className="control-btn"
                                    > + </button>
                                </div>
                            </div>

                            <div className="results-grid">
                                <div className="result-card">
                                    <CreditCard size={24} color="var(--brand-blue-main)" />
                                    <div className="result-text">
                                        <p className="result-label">Initial Unit Cost</p>
                                        <p className="result-value">R {totalBaseCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                    <div className="result-badge once-off">Once-off</div>
                                </div>
                                
                                <div className="result-card">
                                    <Clock size={24} color="var(--brand-blue-main)" />
                                    <div className="result-text">
                                        <p className="result-label">Monthly Hosting</p>
                                        <p className="result-value">R {totalMonthlyCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                    <div className="result-badge recurring">Monthly</div>
                                </div>
                            </div>
                        </div>

                        <div className="calculator-footer">
                            <p className="bulk-hint">Please contact us to discuss your requirements and receive a formal tailored quote for your business.</p>
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Get a Formal Quote <ArrowRight size={20} />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security/Trust Section */}
            <section className="trust-section section-padding">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-item">
                            <ShieldCheck size={32} color="var(--brand-blue-main)" />
                            <h3>No Hidden Costs</h3>
                            <p>What you see is what you pay. No setup fees, no cancellation fees.</p>
                        </div>
                        <div className="trust-item">
                            <CheckCircle2 size={32} color="var(--brand-blue-main)" />
                            <h3>Month-to-Month</h3>
                            <p>Flexible hosting plans that grow with your business needs.</p>
                        </div>
                        <div className="trust-item">
                            <Zap size={32} color="var(--brand-blue-main)" />
                            <h3>Fast Deployment</h3>
                            <p>Units are pre-configured and ready to track as soon as they arrive.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
