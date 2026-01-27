# AI Interview Panel

An AI-powered interview agent designed to simulate real technical and HR interviews in a live, interactive environment. It helps students and job seekers practice interviews end-to-end with real-time questions, answers, evaluation, and feedback.

## 🚀 Features

- **Real-time AI Interview Simulation** - Conduct mock interviews with AI-powered feedback
- **Text and Voice-based Answering** - Respond via text or voice (voice API integration ready)
- **Role-based Question Generation** - Questions tailored to your target role and skills
- **Instant Feedback** - Real-time performance scoring and improvement suggestions
- **Performance Analytics** - Track technical accuracy, communication, confidence, and clarity
- **Interview History** - Review past sessions and track progress

## 📦 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **AI API**: Lyzr AI Agent API
- **Icons**: Lucide React
- **HTTP Client**: Axios

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd AI-Interview-Panel
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run start:dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000/interview`

## 🎯 How to Use

1. **Setup Interview**
   - Enter your email address
   - Select your target role (or enter a custom role)
   - Choose your skills from the list or add custom skills
   - Click "Start Interview"

2. **During Interview**
   - Read the AI interviewer's questions carefully
   - Provide structured answers using the STAR method (Situation, Task, Action, Result)
   - Toggle between text and voice input modes
   - Monitor your real-time performance metrics in the sidebar

3. **After Interview**
   - Click the "End Interview" button
   - Review your overall score, strengths, and weaknesses
   - Get actionable improvement suggestions

## 🔧 API Configuration

The application uses the Lyzr AI Agent API. Configuration is in `/src/api/interview.ts`:

```typescript
const API_BASE_URL = "https://agent-prod.studio.lyzr.ai/v3";
const API_KEY = "sk-default-VWFkXStIV1C7PocgY29qSwHKILnP1AzO";
const AGENT_ID = "696d317ac3a33af8ef060c43";
```

### API Endpoints

- **POST** `/v3/inference/chat/` - Send messages to the AI interviewer

### Request Format

```json
{
  "user_id": "user@example.com",
  "agent_id": "696d317ac3a33af8ef060c43",
  "session_id": "696d317ac3a33af8ef060c43-uniqueid",
  "message": "Your message here"
}
```

## 📁 Project Structure

```
src/
├── api/
│   └── interview.ts          # API service for interview agent
├── app/
│   └── (secured)/
│       └── interview/
│           └── page.tsx       # Main interview page
├── components/
│   └── molecules/
│       ├── InterviewPanel.tsx    # Chat interface
│       ├── AnswerInput.tsx       # Input component
│       ├── FeedbackDisplay.tsx   # Performance metrics
│       └── InterviewSetup.tsx    # Initial setup form
└── styles/
    └── globals.css           # Global styles with custom animations
```

## 🎨 Design Features

- **Glassmorphism Effects** - Modern frosted glass UI design
- **Smooth Animations** - Slide-in and scale animations for better UX
- **Gradient Accents** - Purple and pink gradient themes
- **Custom Scrollbar** - Styled scrollbars for better aesthetics
- **Responsive Layout** - Works on all screen sizes

## 🔮 Upcoming Features

- **Voice API Integration** - Full voice recording and transcription
- **Video Interview** - Enable video feed during interviews
- **Advanced Analytics** - Detailed performance graphs and trends
- **Interview History** - Complete session replay and review
- **Multi-language Support** - Conduct interviews in multiple languages
- **Custom Interview Templates** - Create and save custom interview flows

## 📊 Performance Metrics

The AI evaluates candidates on:

- **Technical Accuracy** (0-100%)
- **Communication Skills** (0-100%)
- **Confidence Level** (0-100%)
- **Clarity & Structure** (0-100%)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues or questions, please open an issue on the GitHub repository.

---

**Built with ❤️ using Next.js and Lyzr AI**
