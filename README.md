# 🎯 AIM LAB

A modern aim training web application built with Next.js 14, TypeScript, and Tailwind CSS. Improve your precision, speed, and tracking skills with multiple game modes designed to enhance your aim and reaction time.

## ✨ Features

- **Multiple Game Modes**:
  - 🎯 **Precision Mode**: Test your accuracy with stationary targets (60 seconds)
  - ⚡ **Speed Mode**: Fast-paced clicking with rapid target spawns (30 seconds)
  - 🔄 **Tracking Mode**: Follow and click moving targets (45 seconds)

- **Performance Tracking**:
  - Real-time score tracking
  - Hit/miss statistics
  - Accuracy percentage calculation
  - Average reaction time measurement

- **Modern UI**:
  - Responsive design for all devices
  - Smooth animations and transitions
  - Beautiful gradient backgrounds
  - Intuitive game controls

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mahbubchula/aimlab.git
cd aimlab
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to start playing!

## 🎮 How to Play

1. **Select a Game Mode**: Choose from Precision, Speed, or Tracking mode on the homepage
2. **Start the Game**: Click the "Start Game" button when ready
3. **Click Targets**: Click on the targets as they appear on screen
4. **Beat Your Score**: Try to achieve the highest score possible within the time limit
5. **Review Stats**: Check your performance statistics after each round

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - UI component library

## 📁 Project Structure

```
aimlab/
├── app/
│   ├── game/
│   │   └── page.tsx      # Game page with all game modes
│   ├── page.tsx          # Homepage with mode selection
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🎯 Game Modes Details

### Precision Mode
- **Duration**: 60 seconds
- **Targets**: 5 stationary targets at a time
- **Goal**: Click as many targets as possible with high accuracy
- **Best for**: Improving click precision and accuracy

### Speed Mode
- **Duration**: 30 seconds
- **Targets**: Single targets that spawn rapidly
- **Goal**: Click targets as quickly as possible
- **Best for**: Improving reaction time and quick clicking

### Tracking Mode
- **Duration**: 45 seconds
- **Targets**: 3 moving targets
- **Goal**: Track and click moving targets
- **Best for**: Improving dynamic aim and tracking skills

## 🏗️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Building for Production

```bash
npm run build
npm run start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

**Mahbub Hassan**

- GitHub: [@mahbubchula](https://github.com/mahbubchula)

## 🙏 Acknowledgments

- Inspired by [Aim Lab](https://aimlab.gg/) - the popular aim training platform
- Built with modern web technologies for optimal performance
