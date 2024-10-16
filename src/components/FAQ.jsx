// FaqSection.jsx
"use client"
import { Copy, MailCheck } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

const faqData = [
  { 
    question: "Can I earn money from Book Hub?", 
    answer: "Absolutely! You can rent or sell your books on your shelf and earn some extra cash." 
  },
  { 
    question: "Are there any hidden charges?", 
    answer: "Nope! We're transparent about our fees, and you won't find any surprise charges here." 
  },
  { 
    question: "Is it safe to contact the book sellers?", 
    answer: "You're in good company! Our community is filled with book lovers who are passionate about reading and sharing new titles. Feel free to connect with them - it's a safe and welcoming space to exchange books and ideas!"
  },
//   { 
//     question: "How do I change my account mail?", 
//     answer: "" 
//   },
//   { 
//     question: "How can I change my payment method?", 
//     answer: "" 
//   },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Toaster/>
    <div className="bg-white min-h-screen flex flex-col items-center mt-20">
      <div className="w-full max-w-3xl px-6 py-12">
        {/* Header Section */}
        <h1 className="text-7xl font-bold text-center mb-4">
          Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">questions</span>
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Do you need some help with something or do you have questions on some features?
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-4 text-lg font-medium flex justify-between items-center"
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="py-2 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium">Have any other questions?</p>
          <p className="text-gray-600 mb-2">
            Don’t hesitate to send us an email with your enquiry or statement at:
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-500 font-medium">hello.nexus011@gmail.com</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText('hello.nexus011@gmail.com')
                toast(
                    <div className='flex items-center gap-2'>
                      <MailCheck /> Email Copied
                    </div>
                  );
              }}
              className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-sm flex items-center gap-2"
            >
              copy <Copy className='w-3 h-3' />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FaqSection;
