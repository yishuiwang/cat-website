'use client'

import React from 'react';

export interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuestionFormProps {
  questions: Question[];
  onAnswer: (questionId: number, answer: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ questions, onAnswer }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">请回答以下问题：</h3>
      {questions.map((question) => (
        <div 
          key={question.id} 
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <p className="font-semibold mb-4 text-xl text-gray-700">{question.question}</p>
          <div className="space-y-3"> {/* 使用 space-y-3 来控制选项之间的垂直间距 */}
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => onAnswer(question.id, option)}
                className="w-full px-4 py-3 rounded-lg transition text-left bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionForm;
