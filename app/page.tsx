'use client';
import React from 'react';
import { Github, Mail, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <header className="text-center mb-12">
          <img
            src="/hacker.jpg"
            alt="Memoryhacker Logo"
            className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-green-500"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-green-400">memoryhacker.in</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400">
            Breaking systems to build stronger ones — OSCP | Web & API Security | Content Creator
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://github.com/vaibhavsanwa" target="_blank" rel="noopener noreferrer">
              <button className="border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-800 flex items-center">
                <Github className="mr-2" /> GitHub
              </button>
            </a>
            <a href="https://vaibhavs-organization-9.gitbook.io/n00bh4cker" target="_blank" rel="noopener noreferrer">
              <button className="border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-800 flex items-center">
                <BookOpen className="mr-2" /> GitBook
              </button>
            </a>
            <a href="mailto:hackfeed26@gmail.com">
              <button className="border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-800 flex items-center">
                <Mail className="mr-2" /> Contact
              </button>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}