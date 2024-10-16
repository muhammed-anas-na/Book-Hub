import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GET_SEARCH_LENGTH_FN } from '../../Axios/methods/POST';

export default function CommandDialogDemo({ isOpen, setIsOpen }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null);
  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsOpen]);


  async function handleSearchChange(val) {
    try {
      const response = await GET_SEARCH_LENGTH_FN(val);
      console.log(response.data)
      setData(response.data);
    } catch (err) {
      console.log("Error while searching on backend : ", err)
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center pt-20">
        <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 overflow-hidden">
          {/* Search input */}
          <div className="flex items-center px-4 border-b">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                handleSearchChange(e.target.value);
              }}
              placeholder="Search for books, categories or location..."
              className="w-full px-4 py-3 text-gray-600 placeholder-gray-400 bg-transparent border-0 focus:outline-none focus:ring-0"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="py-4 px-2 max-h-[60vh] overflow-y-auto">
            {/* Suggestions */}
            <div className="px-2 mb-4">
              <p className="text-xs font-semibold text-gray-400 mb-2">Suggestions</p>
              <div className="space-y-1">
                <Link href={{
                  pathname: '/search',
                  query: {
                    q: searchQuery,
                    type: 'books',
                    count: data?.booksLength || 0
                  },
                }}>
                  <CommandItem
                    icon={
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    }
                    label="Books"
                    count={data?.booksLength}
                  />
                </Link>
                <Link href={{
                  pathname: '/search',
                  query: {
                    q: searchQuery,
                    type: 'category',
                    count: data?.categoryLength || 0
                  },
                }}>
                  <CommandItem
                    icon={
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    }
                    label="Category"
                    count={data?.categoryLength}
                  />
                </Link>

                <Link href={{
                  pathname: '/search',
                  query: {
                    q: searchQuery,
                    type: 'locations',
                    count: data?.locations || 0
                  },
                }}>
                <CommandItem
                  icon={
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  label="Location"
                  count={data?.locations}
                />
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-4" />

            {/* Settings */}
            <div className="px-2">
              <p className="text-xs font-semibold text-gray-400 mb-2">Settings</p>
              <div className="space-y-1">
                <Link href={'/profile'}>
                  <CommandItem
                    icon={
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    }
                    label="Profile"
                    shortcut="⌘P"
                  />
                </Link>
                {/* <CommandItem
                  icon={
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  label="Queries"
                  shortcut="⌘B"
                />
                <CommandItem
                  icon={
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  label="Settings"
                  shortcut="⌘S"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Command Item Component
function CommandItem({ icon, label, count, shortcut }) {
  return (
    <button className="w-full text-left px-2 py-1.5 text-sm text-gray-600 rounded hover:bg-gray-100 focus:bg-gray-100 focus:outline-none group">
      <div className="flex items-center">
        <span className="flex-shrink-0 text-gray-400 group-hover:text-gray-500">
          {icon}
        </span>
        <span className="flex-grow ml-3">{label}</span>
        {
          count == 0 ? (<span className="ml-auto text-xs text-gray-400">0</span>) : (<span className="ml-auto text-xs text-gray-400">{count}</span>)
        }
        {shortcut && (
          <kbd className="ml-auto flex-shrink-0 h-5 select-none items-center gap-1 rounded border bg-gray-50 px-1.5 font-mono text-[10px] font-medium text-gray-400">
            {shortcut}
          </kbd>
        )}
      </div>
    </button>
  );
}