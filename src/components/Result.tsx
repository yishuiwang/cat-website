import React from 'react';
import {Cat} from './Cat';

interface ResultProps {
    cats: Cat[];
}
const Result: React.FC<ResultProps> = ({ cats }) => {
    return (
        <div className="max-w-md mx-auto"> {/* 设置最大宽度并居中 */}
          <h3 className="text-2xl font-bold mb-6 text-blue-800">猫咪种类：</h3>
          <div className="space-y-8">
            {cats.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-4">
                {/* 顶部部分 */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-xl text-gray-800">{cat.name}</h4>
                  <img src={cat.image} alt={cat.name} className="w-20 h-20 object-cover rounded-full" /> {/* 调整头像大小 */}
                </div>
    
                {/* 中部部分 */}
                <p className="text-gray-700 mb-2">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {/* 渲染优点 */}
                  {cat.advantages.split(',').map((advantage, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{advantage.trim()}</span>
                  ))}
                  {/* 渲染缺点 */}
                  {cat.disadvantages.split(',').map((disadvantage, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">{disadvantage.trim()}</span>
                  ))}
                </div>
    
                {/* 底部部分 */}
                <div className="mt-2 bg-green-100 rounded-lg p-2 flex justify-between items-center">
                  <span className="font-semibold text-green-800">价格参考：</span>
                  <span className="text-green-600 font-bold">${cat.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Result;
