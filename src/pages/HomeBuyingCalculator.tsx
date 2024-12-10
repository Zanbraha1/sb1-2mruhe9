import React, { useState, useCallback } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import CurrencyInput from '../components/CurrencyInput';
import PercentageInput from '../components/PercentageInput';
import MediaSection from '../components/MediaSection';

const HomeBuyingCalculator = () => {
  const [homePrice, setHomePrice] = useState('300000');
  const [downPayment, setDownPayment] = useState('20');
  const [loanType, setLoanType] = useState('conventional');
  const [closingCosts, setClosingCosts] = useState('3');
  const [propertyTax, setPropertyTax] = useState('1.2');
  const [insurance, setInsurance] = useState('1200');
  const [hoaFees, setHoaFees] = useState('0');
  const [repairs, setRepairs] = useState('5000');
  const [movingCosts, setMovingCosts] = useState('3000');
  const [buyerConcessions, setBuyerConcessions] = useState('0');

  const calculateCosts = useCallback(() => {
    // Convert inputs to numbers
    const price = Number(homePrice);
    const down = price * (Number(downPayment) / 100);
    const closing = price * (Number(closingCosts) / 100);
    const repairs = Number(repairs);
    const moving = Number(movingCosts);
    const concessions = Number(buyerConcessions);
    const hoa = Number(hoaFees);
    
    // Calculate loan amount
    const loanAmount = price - down;
    
    // Calculate upfront costs
    const totalUpfront = down + closing + repairs + moving - concessions;
    
    // Calculate monthly costs
    const monthlyTax = (price * (Number(propertyTax) / 100)) / 12;
    const monthlyInsurance = Number(insurance) / 12;
    const monthlyHOA = hoa;
    const totalMonthly = monthlyTax + monthlyInsurance + monthlyHOA;

    return {
      loanAmount: loanAmount.toFixed(0),
      downPaymentAmount: down.toFixed(0),
      closingCostAmount: closing.toFixed(0),
      totalUpfront: totalUpfront.toFixed(0),
      monthlyTax: monthlyTax.toFixed(0),
      monthlyInsurance: monthlyInsurance.toFixed(0),
      monthlyHOA: monthlyHOA.toFixed(0),
      totalMonthly: totalMonthly.toFixed(0),
    };
  }, [
    homePrice,
    downPayment,
    closingCosts,
    propertyTax,
    insurance,
    hoaFees,
    repairs,
    movingCosts,
    buyerConcessions,
  ]);

  const results = calculateCosts();

  const blogContent = `
    <h2>Understanding Home Buying Costs in Athens</h2>
    <p>As your local real estate expert, I help buyers understand all the costs involved in purchasing a home. This calculator provides a comprehensive breakdown of both upfront and ongoing costs.</p>

    <h2>Upfront Costs</h2>
    <ul>
      <li><strong>Down Payment:</strong> Typically 3.5-20% depending on loan type</li>
      <li><strong>Closing Costs:</strong> Usually 2-5% of purchase price</li>
      <li><strong>Home Inspection:</strong> $300-500</li>
      <li><strong>Moving Expenses:</strong> Local moves typically $1,000-5,000</li>
      <li><strong>Initial Repairs/Updates:</strong> Varies by property condition</li>
    </ul>

    <h2>Ongoing Costs</h2>
    <ul>
      <li><strong>Property Taxes:</strong> Around 1.2% annually in Athens-Clarke County</li>
      <li><strong>Homeowners Insurance:</strong> Typically $800-1,500 annually</li>
      <li><strong>HOA Fees:</strong> If applicable, varies by community</li>
      <li><strong>Utilities:</strong> Budget for water, electricity, gas, etc.</li>
      <li><strong>Maintenance:</strong> Plan for 1-2% of home value annually</li>
    </ul>

    <h2>Loan Options</h2>
    <p>Common loan types in Athens:</p>
    <ul>
      <li><strong>Conventional:</strong> 3-20% down, good credit needed</li>
      <li><strong>FHA:</strong> 3.5% down, more flexible requirements</li>
      <li><strong>VA:</strong> 0% down for qualified veterans</li>
      <li><strong>USDA:</strong> 0% down in eligible rural areas</li>
      <li><strong>First-time Buyer Programs:</strong> Various state and local options</li>
    </ul>

    <h2>Professional Guidance</h2>
    <p>While this calculator provides estimates, every purchase is unique. As your local expert, I can help you:</p>
    <ul>
      <li>Find the right loan program</li>
      <li>Connect with trusted lenders</li>
      <li>Navigate the buying process</li>
      <li>Negotiate better terms</li>
      <li>Understand local market conditions</li>
    </ul>
  `;

  return (
    <CalculatorLayout
      title="Home Buying Calculator"
      description="Calculate the total costs of buying a home, including upfront and monthly expenses"
      blogContent={blogContent}
    >
      <div className="space-y-6">
        <div className="mb-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="Beautiful home exterior representing a potential purchase"
            position="right"
          />
        </div>

        <div className="bg-navy-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-navy-600 mb-2">Purchase Details</h3>
          <div className="space-y-4">
            <CurrencyInput
              label="Home Price"
              value={homePrice}
              onChange={setHomePrice}
              placeholder="Enter home price"
              id="home-price"
            />
            <PercentageInput
              label="Down Payment"
              value={downPayment}
              onChange={setDownPayment}
              placeholder="Enter down payment percentage"
              id="down-payment"
            />
            <select
              className="input-field"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option value="conventional">Conventional Loan</option>
              <option value="fha">FHA Loan</option>
              <option value="va">VA Loan</option>
              <option value="usda">USDA Loan</option>
            </select>
          </div>
        </div>

        <div className="bg-navy-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-navy-600 mb-2">Closing Costs</h3>
          <div className="space-y-4">
            <PercentageInput
              label="Closing Costs"
              value={closingCosts}
              onChange={setClosingCosts}
              placeholder="Enter closing costs percentage"
              id="closing-costs"
            />
            <CurrencyInput
              label="Buyer Concessions"
              value={buyerConcessions}
              onChange={setBuyerConcessions}
              placeholder="Enter seller concessions"
              id="buyer-concessions"
            />
          </div>
        </div>

        <div className="bg-navy-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-navy-600 mb-2">Monthly Costs</h3>
          <div className="space-y-4">
            <PercentageInput
              label="Property Tax Rate"
              value={propertyTax}
              onChange={setPropertyTax}
              placeholder="Enter property tax rate"
              id="property-tax"
            />
            <CurrencyInput
              label="Annual Insurance"
              value={insurance}
              onChange={setInsurance}
              placeholder="Enter annual insurance"
              id="insurance"
            />
            <CurrencyInput
              label="Monthly HOA Fees"
              value={hoaFees}
              onChange={setHoaFees}
              placeholder="Enter monthly HOA fees"
              id="hoa-fees"
            />
          </div>
        </div>

        <div className="bg-navy-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-navy-600 mb-2">Additional Costs</h3>
          <div className="space-y-4">
            <CurrencyInput
              label="Initial Repairs/Updates"
              value={repairs}
              onChange={setRepairs}
              placeholder="Enter repair costs"
              id="repairs"
            />
            <CurrencyInput
              label="Moving Costs"
              value={movingCosts}
              onChange={setMovingCosts}
              placeholder="Enter moving costs"
              id="moving-costs"
            />
          </div>
        </div>

        <div className="calculator-result">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 border-b border-navy-200 pb-4 mb-4">
              <h3 className="text-xl font-bold text-navy-600">Upfront Costs</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-600">Down Payment</p>
                  <p className="result-value">${Number(results.downPaymentAmount).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Upfront</p>
                  <p className="result-value">${Number(results.totalUpfront).toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Loan Amount</h3>
              <p className="result-value">${Number(results.loanAmount).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Closing Costs</h3>
              <p className="result-value">${Number(results.closingCostAmount).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Monthly Tax</h3>
              <p className="result-value">${Number(results.monthlyTax).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Monthly Insurance</h3>
              <p className="result-value">${Number(results.monthlyInsurance).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Monthly HOA</h3>
              <p className="result-value">${Number(results.monthlyHOA).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Monthly</h3>
              <p className="result-value">${Number(results.totalMonthly).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="Home buying paperwork and calculator"
            position="left"
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default HomeBuyingCalculator;