'use client'

import React, { useEffect, useState } from 'react';
import QuestionForm from './QuestionForm';
import { Cat } from './Cat';
import { Question } from './QuestionForm';
import questionsData from '../data/questions.json'; // 直接导入问题数据
import catsData0 from '../data/cat_breeds_0.json'; // 直接导入猫咪数据
import catsData1 from '../data/cat_breeds_1.json'; // 直接导入猫咪数据
import catsData2 from '../data/cat_breeds_2.json'; // 直接导入猫咪数据
import Result from './Result';

const Main: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [cats, setCats] = useState<Cat[]>([]);
  const [recommendation, setRecommendation] = useState<string>('');

  useEffect(() => {
    // 设置问题数据
    setQuestions(questionsData as Question[]);
    // 设置猫咪数据
    const mappedCats0 = catsData0.map((cat, index) => ({
      id: index + 1, // 生成唯一标识符
      name: cat.title, // 使用 title 作为猫咪名称
      advantages: cat.advantage.join(', '),
      disadvantages: cat.disadvantage.join(', '),
      price: cat.price.toString(), // 使用数字类型
      description: cat.description, // 描述
      image: cat.image // 图片链接
    }));

    const mappedCats1 = catsData1.map((cat, index) => ({
      id: index + 1, // 生成唯一标识符
      name: cat.title, // 使用 title 作为猫咪名称
      advantages: cat.advantage.join(', '),
      disadvantages: cat.disadvantage.join(', '),
      price: cat.price.toString(), // 使用数字类型
      description: cat.description, // 描述
      image: cat.image // 图片链接
    }));

    const mappedCats2 = catsData2.map((cat, index) => ({
      id: index + 1, // 生成唯一标识符
      name: cat.title, // 使用 title 作为猫咪名称
      advantages: cat.advantage.join(', '),
      disadvantages: cat.disadvantage.join(', '),
      price: cat.price.toString(), // 使用数字类型
      description: cat.description, // 描述
      image: cat.image // 图片链接
    }));

    setCats([...mappedCats0, ...mappedCats1, ...mappedCats2]);
  }, []);

  const handleAnswer = (questionId: number, answer: string) => {
    // 处理答案并随机选择猫咪
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '80px' }}> {/* 添加上边距以避免遮挡 */}
      <div style={{ flex: '1', minWidth: '300px', padding: '10px' }}>
        <QuestionForm questions={questions} onAnswer={handleAnswer} />
      </div>
      <div style={{ flex: '1', minWidth: '300px', padding: '10px' }}>
        <Result cats={cats} />
      </div>
    </div>
  );
};

export default Main;
