# AI Interview Agent

An intelligent AI-powered interview platform that uses text-to-speech and AI evaluation to conduct interactive technical interviews.

## Features

### Phase 1 (Current Implementation)

- **Instructions Page**: Clear guidelines for interview participants
- **AI Text-to-Speech**: Questions are automatically read aloud using ElevenLabs API
- **Answer Input**: Text area for typing interview responses
- **AI Evaluation**: Real-time feedback on answers using OpenAI GPT-3.5
- **Question Timer**: Track time spent on each question
- **Question Navigation**: Easy navigation between questions with progress tracking
- **Video Placeholder**: UI ready for future camera integration
- **Responsive Design**: Modern, premium design with smooth animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Text-to-Speech**: ElevenLabs API
- **AI Evaluation**: OpenAI GPT-3.5 Turbo
- **Styling**: CSS Modules with custom design system

## Getting Started

### Prerequisites

- Node.js 18+ installed
- ElevenLabs API key
- OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your API keys:
   ```
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

### Running the Application

Development mode:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

Build for production:
```bash
npm run build
npm start
```

## Usage

1. **Start**: Open the application and read the instructions
2. **Begin Interview**: Click "Start Interview" to begin
3. **Listen**: Each question will be automatically read aloud
4. **Answer**: Type your response in the text area
5. **Evaluate**: Click "Save & Evaluate" to get AI feedback
6. **Navigate**: Use the question panel to move between questions
7. **Track Time**: Monitor time spent on each question

## Project Structure

```
ai-interview-agent/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── evaluate/
│   │   │   │   └── route.js       # OpenAI evaluation endpoint
│   │   │   └── tts/
│   │   │       └── route.js       # ElevenLabs text-to-speech endpoint
│   │   ├── interview/
│   │   │   ├── page.js            # Interview page component
│   │   │   └── interview.module.css
│   │   ├── globals.css            # Global styles
│   │   ├── layout.js              # Root layout
│   │   ├── page.js                # Instructions page
│   │   └── page.module.css
├── .env.local                     # Environment variables (not in git)
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## API Endpoints

### POST /api/tts
Converts text to speech using ElevenLabs.

**Request Body:**
```json
{
  "text": "Question text to convert to speech"
}
```

**Response:** Audio file (audio/mpeg)

### POST /api/evaluate
Evaluates interview answers using OpenAI.

**Request Body:**
```json
{
  "question": "Interview question",
  "answer": "Candidate's answer"
}
```

**Response:**
```json
{
  "evaluation": "Detailed AI feedback",
  "timestamp": "ISO timestamp"
}
```

## Future Enhancements

- Real-time video recording and analysis
- Speech-to-text for audio answers
- Advanced analytics and reporting
- Multiple interview templates
- Interview playback and review
- Multi-language support

## License

ISC

## Author

Built with ❤️ using Next.js and AI
