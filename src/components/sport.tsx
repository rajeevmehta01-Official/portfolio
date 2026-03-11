'use client';

import React from 'react';
const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Beyond Code - My Journey & Interests
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          (From Architecture to Leadership)
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground text-base">
        <p>
          With over 11 years in mobile development, my journey has been about more than just writing code. I've had the privilege of leading cross-functional teams of up to ten engineers, launching 15+ consumer and enterprise apps that consistently raised the bar for quality.
        </p>
        <p>
          I believe in mentoring the next generation of developers. Whether it's code reviews, architecture discussions, or helping junior devs debug their first production issue — I find great satisfaction in helping others grow.
        </p>
        <p>
          Outside of work, I'm a continuous learner who stays on top of the latest in mobile development — from SwiftUI to Flutter's evolving ecosystem. I enjoy exploring new architectural patterns and finding ways to make apps faster and more reliable.
        </p>
        <p>
          I'm passionate about translating business goals into intuitive, high-performance mobile experiences. The entire journey — from road-mapping and architecture to CI/CD and App Store release — is what drives me every day.
        </p>
      </div>
    </div>
  );
};

export default Sports;
