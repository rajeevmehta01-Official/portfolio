import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I bring to the table 👇

- 📅 **Experience**: 11+ years in mobile development (Jan 2012 – Present)
- 🌍 **Location**: **Gurugram, Haryana**
- 🧑‍💻 **Focus**: Mobile Team Lead & Architecture, iOS & Flutter Development
- 🛠️ **Stack**: Flutter/Dart, Swift/SwiftUI, Objective-C, Clean Architecture, MVVM, BLoC, Provider, Riverpod
- ✅ **What I bring**: Led teams of up to 10 engineers, launched 15+ consumer and enterprise apps. Deep expertise in CI/CD, App Store releases, and performance optimization.
- 🔥 I own the entire mobile journey — from road-mapping to release

📬 **Contact me** via:
- Email: rajeevmehta01@gmail.com
- Phone: +91 9582428073

Let’s build something great together ✌️
    `;
  },
});
