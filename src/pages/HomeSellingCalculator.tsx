import React, { useState, useCallback } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import CurrencyInput from '../components/CurrencyInput';
import PercentageInput from '../components/PercentageInput';
import MediaSection from '../components/MediaSection';

const HomeSellingCalculator = () => {
  const [homeValue, setHomeValue] = useState('300000');
  const [mortgageBalance, setMortgageBalance] = useState('200000');
  const [commissionRate, setCommissionRate] = useState('6');
  const [repairCosts, setRepairCosts] = useState('5000');
  const [stagingCosts, setStagingCosts] = useState('2500');
  const [closingCosts, setClosingCosts] = useState('3000');
  const [sellerConcessions, setSellerConcessions] = useState('0');

  const calculateProceeds = useCallback(() => {
    // Convert inputs to numbers
    const value = Number(homeValue);
    const mortgage = Number(mortgageBalance);
    const commission = value * (Number(commissionRate) / 100);
    const repairs = Number(repairCosts);
    const staging = Number(stagingCosts);
    const closing = Number(closingCosts);
    const concessions = Number(sellerConcessions);

    // Calculate total costs
    const totalCosts = commission + repairs + staging + closing + concessions;
    
    // Calculate proceeds
    const grossProceeds = value;
    const netProceeds = value - mortgage - totalCosts;
    
    // Calculate cost breakdown
    const costBreakdown = {
      commission,
      repairs,
      staging,
      closing,
      concessions,
    };

    return {
      grossProceeds: grossProceeds.toFixed(0),
      netProceeds: netProceeds.toFixed(0),
      totalCosts: totalCosts.toFixed(0),
      costBreakdown: {
        commission: commission.toFixed(0),
        repairs: repairs.toFixed(0),
        staging: staging.toFixed(0),
        closing: closing.toFixed(0),
        concessions: concessions.toFixed(0),
      },
    };
  }, [homeValue, mortgageBalance, commissionRate, repairCosts, stagingCosts, closingCosts, sellerConcessions]);

  const results = calculateProceeds();

  const blogContent = `
    <h2>Understanding Home Selling Costs in Athens</h2>
    <p>As your local real estate expert, I help sellers understand and prepare for the various costs involved in selling their homes. This calculator provides a clear breakdown of potential expenses and estimated proceeds.</p>

    <h2>Key Selling Costs</h2>
    <ul>
      <li><strong>Real Estate Commission:</strong> Typically 5-6% of the sale price, split between buyer's and seller's agents</li>
      <li><strong>Repairs and Updates:</strong> Pre-listing improvements to maximize value</li>
      <li><strong>Staging:</strong> Professional presentation to attract buyers</li>
      <li><strong>Closing Costs:</strong> Various fees and taxes associated with the sale</li>
      <li><strong>Seller Concessions:</strong> Potential buyer incentives or closing cost assistance</li>
    </ul>

    <h2>Maximizing Your Sale Price</h2>
    <p>Strategic investments before listing can increase your final proceeds:</p>
    <ul>
      <li>Focus on high-impact repairs and updates</li>
      <li>Professional staging for better first impressions</li>
      <li>Proper pricing strategy for your market</li>
      <li>Timing your sale for optimal market conditions</li>
      <li>Professional photography and marketing</li>
    </ul>

    <h2>Athens Market Insights</h2>
    <p>Current trends affecting home sales in Athens:</p>
    <ul>
      <li>Average days on market</li>
      <li>Typical buyer concessions</li>
      <li>Popular home improvements</li>
      <li>Seasonal market variations</li>
      <li>Neighborhood-specific trends</li>
    </ul>

    <h2>Professional Guidance</h2>
    <p>While this calculator provides estimates, every sale is unique. As your local expert, I can help you:</p>
    <ul>
      <li>Determine optimal listing price</li>
      <li>Identify cost-effective improvements</li>
      <li>Negotiate better terms</li>
      <li>Market your property effectively</li>
      <li>Navigate the entire selling process</li>
    </ul>
  `;

  return (
    <CalculatorLayout
      title="Home Selling Calculator"
      description="Calculate your estimated proceeds from selling your home"
      blogContent={blogContent}
    >
      <div className="space-y-6">
        <div className="mb-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="Home for sale with sold sign"
            position="right"
          />
        </div>

        <div className="bg-navy-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-navy-600 mb-2">Property Details</h3>
          <div className="space-y-4">
            <CurrencyInput
              label="Home Value"
              value={homeValue}
              onChange={setHomeValue}
              placeholder="Enter estimated home value"
              id="home-value"
            />
            <CurrencyInput
              label="Mortgage Balance"
              value={mortgageBalance}
              onChange={setMortgageBalance}
              placeholder="Enter remaining mortgage balance"
              id="mortgage-balance"
            />
          </div>
        </div>

        <div className="bg-navy-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-navy-600 mb-2">Selling Costs</h3>
          <div className="space-y-4">
            <PercentageInput
              label="Commission Rate"
              value={commissionRate}
              onChange={setCommissionRate}
              placeholder="Enter total commission rate"
              id="commission-rate"
            />
            <CurrencyInput
              label="Repair Costs"
              value={repairCosts}
              onChange={setRepairCosts}
              placeholder="Enter estimated repair costs"
              id="repair-costs"
            />
            <CurrencyInput
              label="Staging Costs"
              value={stagingCosts}
              onChange={setStagingCosts}
              placeholder="Enter staging costs"
              id="staging-costs"
            />
            <CurrencyInput
              label="Closing Costs"
              value={closingCosts}
              onChange={setClosingCosts}
              placeholder="Enter estimated closing costs"
              id="closing-costs"
            />
            <CurrencyInput
              label="Seller Concessions"
              value={sellerConcessions}
              onChange={setSellerConcessions}
              placeholder="Enter seller concessions"
              id="seller-concessions"
            />
          </div>
        </div>

        <div className="calculator-result">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 border-b border-navy-200 pb-4 mb-4">
              <h3 className="text-xl font-bold text-navy-600">Estimated Proceeds</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-600">Gross Proceeds</p>
                  <p className="result-value">${Number(results.grossProceeds).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Net Proceeds</p>
                  <p className="result-value">${Number(results.netProceeds).toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Commission</h3>
              <p className="result-value">${Number(results.costBreakdown.commission).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Repairs</h3>
              <p className="result-value">${Number(results.costBreakdown.repairs).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Staging</h3>
              <p className="result-value">${Number(results.costBreakdown.staging).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Closing Costs</h3>
              <p className="result-value">${Number(results.costBreakdown.closing).toLocaleString()}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-700">Total Costs</h3>
              <p className="result-value">${Number(results.totalCosts).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="Beautiful home exterior ready for sale"
            position="left"
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default HomeSellingCalculator;