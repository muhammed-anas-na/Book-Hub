import React from 'react';

const BookCategoryDropdown = ({setCategory,category}) => {
  // List of book categories
  const categories = [
    "Text-Books",
    'Fiction',
    'Non-Fiction',
    'Science',
    'Technology',
    'Biography',
    'Philosophy',
    'History',
    'Fantasy',
    'Adventure',
    'Romance',
    'Mystery',
    'Thriller',
    'Horror',
    'Self-Help',
    'Cookbooks',
    'Graphic Novels',
    'Poetry',
    'Children\'s',
    'Young Adult',
    'Classic Literature',
    'Travel'
];


  return (
    <select
    onChange={(e)=>{
      setCategory(e.target.value);
    }}
      name="category"
      className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1"
    >
      <option value="">Select a category</option>
      {
        categories.map((val, index) => (
          <option key={index} value={val}>{val}</option>
        ))
      }
    </select>
  );
};

export default BookCategoryDropdown;
