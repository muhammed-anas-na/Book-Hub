import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonCard = ({ title, items, isPositive }) => (
  <div className={`p-6 rounded-lg ${isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
    <h3 className={`text-xl font-semibold mb-4 ${isPositive ? 'text-green-700' : 'text-red-700'}`}>
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          {isPositive ? (
            <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
          ) : (
            <X className="w-5 h-5 mt-0.5 text-red-600 flex-shrink-0" />
          )}
          <span className={`${isPositive ? 'text-green-700' : 'text-red-700'}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Comparison = () => {
  const withoutZenVoice = [
    'Spend a fortune on expensive books and subscriptions',
    'Limited to local bookstore selections and shipping delays',
    'Miss out on connecting with fellow readers and book discussions',
    "Stuck in reading ruts with no personalized recommendations)",
    "Miss out on profitable book-sharing and review opportunities"
  ];

  const withBookHub = [
    'Access millions of books instantly, anywhere in the world',
    'Find everything 100% free, forever - no hidden costs',
    'Turn your reading passion into profit while saving thousands',
    'Join a thriving community of book lovers and make lifelong connections',
    'Discover your next favorite book with personalized recommendations'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        What problem we solve for you?
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ComparisonCard 
          title="You'r reading habbit without Book Hub" 
          items={withoutZenVoice} 
          isPositive={false} 
        />
        <ComparisonCard 
          title="Your reading habbit + Book Hub ⚡️" 
          items={withBookHub} 
          isPositive={true} 
        />
      </div>
    </div>
  );
};

export default Comparison;