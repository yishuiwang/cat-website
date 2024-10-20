import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-100 text-blue-800 p-4 shadow-sm fixed w-full z-10"> {/* 添加 fixed 类以固定导航 */}
      <div className="container mx-auto flex items-center">
        <h1 className="text-2xl font-bold ml-4 mr-4">找到命定喵星人！🐾</h1>
        <nav className="ml-auto">
          <ul className="flex space-x-2">
            <li>
              <button className="bg-white text-blue-800 px-3 py-2 rounded-md hover:bg-blue-200 transition duration-200 ease-in-out"> {/* 添加悬停效果 */}
                中/En
              </button>
            </li>
            <li>
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-800 px-3 py-2 rounded-md hover:bg-blue-200 transition duration-200 ease-in-out inline-block"> {/* 添加悬停效果 */}
                GitHub
              </a>
            </li>
            <li>
              <button className="bg-white text-blue-800 px-3 py-2 rounded-md hover:bg-blue-200 transition duration-200 ease-in-out"> {/* 添加悬停效果 */}
                更多
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;