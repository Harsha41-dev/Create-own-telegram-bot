# Telegram Bot with Telegraf

A feature-rich Telegram bot built using the Telegraf framework for Node.js.

## Features

### Basic Features
- 🤖 Welcome message for new users
- 📋 Help command with available options
- 🔄 Echo functionality
- 🕐 Current time display
- 🎲 Random number generator
- 💬 Smart text message responses
- 📸 Media file recognition (photos, stickers)
- ⚡ Error handling and graceful shutdown

### 🏆 Competitive Programming Features
- 🧩 Random coding problems with examples and tags
- 📊 Time complexity cheatsheet
- 🏗️ Data structures quick reference
- 🔄 Algorithm patterns and techniques
- 🏁 Contest information and platforms
- 📝 Code templates for C++, Python, and Java
- 🧮 Math formulas for competitive programming

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- A Telegram account

## Setup Instructions

### 1. Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather and send `/newbot`
3. Follow the instructions to create your bot:
   - Choose a name for your bot
   - Choose a username (must end with 'bot')
4. BotFather will provide you with a bot token - save this token!

### 2. Clone and Setup the Project

```bash
# Clone or download this project
# Navigate to the project directory
cd creating-own-telegram-bot

# Install dependencies
npm install
```

### 3. Configure Environment Variables

1. Open the `.env` file in the project root
2. Replace `your_bot_token_here` with your actual bot token from BotFather:

```env
BOT_TOKEN=replace_with_your_bot_token
```

### 4. Run the Bot

```bash
# Start the bot
npm start

# Or for development
npm run dev
```

You should see:
```
🚀 Starting Telegram bot...
✅ Bot is running successfully!
Press Ctrl+C to stop the bot
```

## Available Commands

### Basic Commands
| Command | Description |
|---------|-------------|
| `/start` | Welcome message and bot introduction |
| `/help` | Display all available commands |
| `/about` | Information about the bot |
| `/echo [message]` | Bot will repeat your message |
| `/time` | Get current date and time |
| `/random` | Generate a random number (1-100) |

### 🏆 Competitive Programming Commands
| Command | Description |
|---------|-------------|
| `/problem` | Get a random coding problem to solve |
| `/complexity` | Time complexity cheatsheet |
| `/ds` | Data structures quick reference |
| `/algorithms` | Algorithm patterns and techniques |
| `/contest` | Contest information and platforms |
| `/template` | Code templates for C++, Python, Java |
| `/math` | Math formulas for competitive programming |

## Bot Behavior

- **Text Messages**: The bot responds intelligently to common greetings, farewells, and thanks
- **Media Files**: Recognizes and responds to photos and stickers
- **Error Handling**: Gracefully handles errors and provides user feedback

## Project Structure

```
creating-own-telegram-bot/
├── index.js          # Main bot implementation
├── package.json      # Project configuration
├── .env             # Environment variables (bot token)
├── .gitignore       # Git ignore file
└── README.md        # This file
```

## Customization

You can easily customize the bot by modifying `index.js`:

- Add new commands using `bot.command('commandname', callback)`
- Handle different message types with `bot.on('message_type', callback)`
- Modify responses and add new features

## Troubleshooting

### Common Issues

1. **Bot not responding**
   - Check if the bot token is correct in `.env`
   - Ensure the bot is running (`npm start`)
   - Verify internet connection

2. **"Unauthorized" error**
   - Double-check your bot token
   - Make sure there are no extra spaces in the `.env` file

3. **Commands not working**
   - Ensure commands start with `/`
   - Check console for error messages

### Getting Help

- Check the [Telegraf documentation](https://telegraf.js.org/)
- Review [Telegram Bot API](https://core.telegram.org/bots/api)

## Security Notes

- Never commit your `.env` file to version control
- Keep your bot token secret
- The `.gitignore` file is configured to exclude sensitive files

## License

ISC License - feel free to modify and use this bot for your projects!

---

**Happy botting! 🤖**
