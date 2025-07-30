const { Telegraf } = require('telegraf');
require('dotenv').config();

// Create bot instance
const bot = new Telegraf(process.env.BOT_TOKEN);

// Start command
bot.start((ctx) => {
    const welcomeMessage = `
🤖 Welcome to your Telegram Bot!

Hello ${ctx.from.first_name}! I'm your personal bot created with Telegraf.

Use /help to see available commands.
    `;
    ctx.reply(welcomeMessage);
});

// Help command
bot.help((ctx) => {
    const helpMessage = `
📋 Available Commands:

**Basic Commands:**
/start - Start the bot and get welcome message
/help - Show this help message
/about - Learn more about this bot
/echo [message] - I'll repeat your message
/time - Get current time
/random - Get a random number between 1-100

**🏆 Competitive Programming Commands:**
/problem - Get a random coding problem to solve
/complexity - Time complexity cheatsheet
/ds - Data structures quick reference
/algorithms - Algorithm patterns and techniques
/contest - Contest information and platforms
/template - Code templates for C++, Python, Java
/math - Math formulas for competitive programming

You can also just send me any text message and I'll respond!
    `;
    ctx.reply(helpMessage);
});

// About command
bot.command('about', (ctx) => {
    const aboutMessage = `
ℹ️ About This Bot

This bot was created using Telegraf, a modern Telegram Bot API framework for Node.js.

Features:
• Responds to commands
• Echoes messages
• Shows current time
• Generates random numbers
• Competitive programming resources
• Built with ❤️ using JavaScript

Version: 2.0.0
    `;
    ctx.reply(aboutMessage);
});

// Echo command
bot.command('echo', (ctx) => {
    const message = ctx.message.text.replace('/echo', '').trim();
    if (message) {
        ctx.reply(`🔄 You said: "${message}"`);
    } else {
        ctx.reply('Please provide a message to echo. Example: /echo Hello World!');
    }
});

// motivation command

bot.command('panic',ctx=>{
    const motivationMessage = `every coder is once noob`;
    ctx.reply(motivationMessage);
})

// Time command
bot.command('time', (ctx) => {
    const now = new Date();
    const timeString = now.toLocaleString();
    ctx.reply(`🕐 Current time: ${timeString}`);
});

// Random number command
bot.command('random', (ctx) => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    ctx.reply(`🎲 Random number: ${randomNum}`);
});

// Competitive Programming Commands

// Generate random coding problem
bot.command('problem', (ctx) => {
    const problems = [
        {
            title: "Two Sum",
            difficulty: "Easy",
            description: "Given an array of integers and a target sum, return indices of two numbers that add up to the target.",
            example: "Input: [2,7,11,15], target = 9\nOutput: [0,1]",
            tags: ["Array", "Hash Table"]
        },
        {
            title: "Binary Search",
            difficulty: "Easy",
            description: "Implement binary search algorithm to find target element in sorted array.",
            example: "Input: [1,3,5,7,9], target = 5\nOutput: 2",
            tags: ["Binary Search", "Array"]
        },
        {
            title: "Longest Palindromic Substring",
            difficulty: "Medium",
            description: "Find the longest palindromic substring in a given string.",
            example: "Input: 'babad'\nOutput: 'bab' or 'aba'",
            tags: ["String", "Dynamic Programming"]
        },
        {
            title: "Maximum Subarray",
            difficulty: "Medium",
            description: "Find the contiguous subarray with the largest sum (Kadane's Algorithm).",
            example: "Input: [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6",
            tags: ["Array", "Dynamic Programming"]
        },
        {
            title: "Valid Parentheses",
            difficulty: "Easy",
            description: "Determine if the input string has valid parentheses arrangement.",
            example: "Input: '()[]{}'\nOutput: true",
            tags: ["Stack", "String"]
        },
        {
            title: "Merge Intervals",
            difficulty: "Medium",
            description: "Merge all overlapping intervals and return non-overlapping intervals.",
            example: "Input: [[1,3],[2,6],[8,10]]\nOutput: [[1,6],[8,10]]",
            tags: ["Array", "Sorting"]
        },
        {
            title: "Climbing Stairs",
            difficulty: "Easy",
            description: "Find number of distinct ways to climb n stairs (1 or 2 steps at a time).",
            example: "Input: n = 3\nOutput: 3 (1+1+1, 1+2, 2+1)",
            tags: ["Dynamic Programming", "Math"]
        },
        {
            title: "LRU Cache",
            difficulty: "Medium",
            description: "Design and implement a Least Recently Used (LRU) cache.",
            example: "Operations: put(1,1), put(2,2), get(1), put(3,3), get(2)",
            tags: ["Design", "Hash Table", "Linked List"]
        }
    ];
    
    const randomProblem = problems[Math.floor(Math.random() * problems.length)];
    const problemMessage = `
🧩 **Random Coding Problem**

**${randomProblem.title}** (${randomProblem.difficulty})

📝 **Description:**
${randomProblem.description}

💡 **Example:**
${randomProblem.example}

🏷️ **Tags:** ${randomProblem.tags.join(', ')}

Good luck coding! 💻
    `;
    ctx.reply(problemMessage);
});

// Algorithm complexity cheatsheet
bot.command('complexity', (ctx) => {
    const complexityMessage = `
📊 **Time Complexity Cheatsheet**

**Common Complexities (Best to Worst):**
• O(1) - Constant
• O(log n) - Logarithmic
• O(n) - Linear
• O(n log n) - Linearithmic
• O(n²) - Quadratic
• O(n³) - Cubic
• O(2ⁿ) - Exponential
• O(n!) - Factorial

**Data Structure Operations:**
**Array:** Access O(1), Search O(n), Insert O(n), Delete O(n)
**Hash Table:** Access O(1), Search O(1), Insert O(1), Delete O(1)
**Binary Search Tree:** Access O(log n), Search O(log n), Insert O(log n), Delete O(log n)
**Stack/Queue:** Access O(n), Search O(n), Insert O(1), Delete O(1)

**Sorting Algorithms:**
• Quick Sort: O(n log n) avg, O(n²) worst
• Merge Sort: O(n log n)
• Heap Sort: O(n log n)
• Bubble Sort: O(n²)
    `;
    ctx.reply(complexityMessage);
});

// Data structures reference
bot.command('ds', (ctx) => {
    const dsMessage = `
🏗️ **Data Structures Quick Reference**

**Linear:**
• **Array** - Fixed size, indexed access
• **Linked List** - Dynamic size, sequential access
• **Stack** - LIFO (Last In, First Out)
• **Queue** - FIFO (First In, First Out)

**Non-Linear:**
• **Binary Tree** - Hierarchical structure
• **Binary Search Tree** - Ordered binary tree
• **Heap** - Complete binary tree (min/max)
• **Graph** - Vertices connected by edges

**Hash-based:**
• **Hash Table** - Key-value pairs, O(1) access
• **Hash Set** - Unique elements, O(1) lookup

**Advanced:**
• **Trie** - Prefix tree for strings
• **Segment Tree** - Range queries
• **Disjoint Set** - Union-Find operations

Use /algorithms for algorithm patterns!
    `;
    ctx.reply(dsMessage);
});

// Algorithm patterns
bot.command('algorithms', (ctx) => {
    const algoMessage = `
🔄 **Algorithm Patterns**

**Two Pointers:**
• Use for sorted arrays, palindromes
• Example: Two Sum in sorted array

**Sliding Window:**
• Use for subarray/substring problems
• Example: Maximum sum subarray of size k

**Binary Search:**
• Use for sorted data, search space reduction
• Example: Find element in rotated sorted array

**Dynamic Programming:**
• Use for optimization problems
• Example: Fibonacci, coin change

**Backtracking:**
• Use for generating all solutions
• Example: N-Queens, Sudoku solver

**Greedy:**
• Use for optimization with local choices
• Example: Activity selection, Huffman coding

**Divide & Conquer:**
• Use for breaking problems into subproblems
• Example: Merge sort, quick sort

**Graph Algorithms:**
• **BFS/DFS** - Traversal, shortest path
• **Dijkstra** - Shortest path with weights
• **Union-Find** - Connected components
    `;
    ctx.reply(algoMessage);
});

// Coding contest timer
bot.command('contest', (ctx) => {
    const contests = [
        "🏆 Codeforces Round starts in 2 hours!",
        "🥇 AtCoder Beginner Contest this weekend",
        "🎯 LeetCode Weekly Contest every Sunday",
        "🚀 Google Code Jam registration open",
        "⭐ TopCoder SRM this Thursday",
        "🔥 HackerRank World CodeSprint next month"
    ];
    
    const randomContest = contests[Math.floor(Math.random() * contests.length)];
    const contestMessage = `
🏁 **Competitive Programming Contests**

${randomContest}

**Popular Platforms:**
• **Codeforces** - codeforces.com
• **AtCoder** - atcoder.jp
• **LeetCode** - leetcode.com
• **HackerRank** - hackerrank.com
• **TopCoder** - topcoder.com
• **CodeChef** - codechef.com

💡 **Tips:**
• Practice daily problems
• Learn common algorithms
• Participate in virtual contests
• Review editorial solutions

Good luck in your next contest! 🎉
    `;
    ctx.reply(contestMessage);
});

// Code snippet generator
bot.command('template', (ctx) => {
    const templates = {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    // Your code here
    
    return 0;
}`,
        python: `import sys
from collections import defaultdict, deque
from heapq import heappush, heappop

def solve():
    # Your code here
    pass

if __name__ == "__main__":
    solve()`,
        java: `import java.util.*;
import java.io.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Your code here
        
        sc.close();
    }
}`
    };
    
    const templateMessage = `
📝 **Competitive Programming Templates**

**C++ Template:**
\`\`\`cpp
${templates.cpp}
\`\`\`

**Python Template:**
\`\`\`python
${templates.python}
\`\`\`

**Java Template:**
\`\`\`java
${templates.java}
\`\`\`

💡 **Pro Tips:**
• Use fast I/O for large inputs
• Import commonly used libraries
• Set up debugging macros
• Practice with your preferred language
    `;
    ctx.reply(templateMessage);
});

// Math formulas for CP
bot.command('math', (ctx) => {
    const mathMessage = `
🧮 **Math Formulas for Competitive Programming**

**Number Theory:**
• **GCD:** gcd(a,b) = gcd(b, a%b)
• **LCM:** lcm(a,b) = (a*b)/gcd(a,b)
• **Prime Check:** Check divisors up to √n
• **Modular Arithmetic:** (a+b)%m = ((a%m)+(b%m))%m

**Combinatorics:**
• **Permutations:** P(n,r) = n!/(n-r)!
• **Combinations:** C(n,r) = n!/(r!(n-r)!)
• **Catalan Numbers:** C(n) = (2n)!/(n!(n+1)!)

**Geometry:**
• **Distance:** √((x₂-x₁)² + (y₂-y₁)²)
• **Area of Triangle:** |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|/2
• **Circle Area:** πr²

**Series:**
• **Arithmetic:** Sum = n(2a + (n-1)d)/2
• **Geometric:** Sum = a(rⁿ-1)/(r-1)
• **Sum of squares:** n(n+1)(2n+1)/6

**Bit Manipulation:**
• **Check bit:** (n & (1<<i)) != 0
• **Set bit:** n | (1<<i)
• **Clear bit:** n & ~(1<<i)
• **Count bits:** __builtin_popcount(n)
    `;
    ctx.reply(mathMessage);
});

// Handle text messages
bot.on('text', (ctx) => {
    const userMessage = ctx.message.text;
    
    // Don't respond to commands (they're handled above)
    if (userMessage.startsWith('/')) {
        return;
    }
    
    // Simple responses based on message content
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
        ctx.reply(`Hello ${ctx.from.first_name}! 👋 How can I help you today?`);
    } else if (userMessage.toLowerCase().includes('bye') || userMessage.toLowerCase().includes('goodbye')) {
        ctx.reply('Goodbye! 👋 Have a great day!');
    } else if (userMessage.toLowerCase().includes('thank')) {
        ctx.reply('You\'re welcome! 😊');
    } else if (userMessage.toLowerCase().includes('coding') || userMessage.toLowerCase().includes('programming')) {
        ctx.reply('Great! Try /problem for a coding challenge, or /help to see all competitive programming commands! 💻');
    } else {
        ctx.reply(`I received your message: "${userMessage}"\n\nTry using /help to see what I can do!`);
    }
});

// Handle stickers
bot.on('sticker', (ctx) => {
    ctx.reply('Nice sticker! 😄');
});

// Handle photos
bot.on('photo', (ctx) => {
    ctx.reply('Great photo! 📸');
});

// Error handling
bot.catch((err, ctx) => {
    console.error('Bot error:', err);
    ctx.reply('Sorry, something went wrong. Please try again.');
});

// Start the bot
console.log('🚀 Starting Telegram bot...');
bot.launch()
    .then(() => {
        console.log('✅ Bot is running successfully!');
        console.log('Press Ctrl+C to stop the bot');
    })
    .catch((err) => {
        console.error('❌ Failed to start bot:', err);
    });

// Enable graceful stop
process.once('SIGINT', () => {
    console.log('\n🛑 Stopping bot...');
    bot.stop('SIGINT');
});

process.once('SIGTERM', () => {
    console.log('\n🛑 Stopping bot...');
    bot.stop('SIGTERM');
});
