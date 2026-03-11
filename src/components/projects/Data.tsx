// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT: Array<{
  title: string;
  description: string;
  techStack: string[];
  date: string;
  links: Array<{ name: string; url: string }>;
  images: Array<{ src: string; alt: string }>;
}> = [
  {
    title: 'Petro IT Platform',
    description:
      'Architected a real-time data management system for pipeline construction with material traceability. Led cross-platform optimization and developer mentorship for the entire engineering team.',
    techStack: [
      'Flutter',
      'Dart',
      'Swift',
      'iOS',
      'Android',
      'Firebase',
      'REST APIs',
      'Clean Architecture',
    ],
    date: 'May 2020 - Present',
    links: [],
    images: [
      { src: '/projects/petroit-preview.png', alt: 'Petro IT Platform - Real-time data management' },
    ],
  },
  {
    title: 'Learn Buddhism',
    description:
      'Developed a comprehensive cross-platform app featuring multilingual support, diverse learning formats, and an extensive database of teachings. Built for iOS, Android, and Web platforms.',
    techStack: [
      'Flutter',
      'Dart',
      'Swift',
      'iOS',
      'Android',
      'Firebase',
      'Multilingual Support',
      'REST APIs',
    ],
    date: 'May 2023 - Sep 2024',
    links: [],
    images: [
      { src: '/projects/learnbuddhism-preview.png', alt: 'Learn Buddhism app with multilingual support' },
    ],
  },
  {
    title: 'TEN89',
    description:
      'Built an inventory tracking app using Dart, Flutter, and Swift bridging. Integrated third-party services like Google Maps, AWS S3, and Firebase for a seamless user experience.',
    techStack: [
      'Dart',
      'Flutter',
      'Swift',
      'Google Maps',
      'AWS S3',
      'Firebase',
      'Platform Channels',
    ],
    date: 'May 2020 - Feb 2021',
    links: [],
    images: [
      { src: '/projects/ten89-preview.png', alt: 'TEN89 inventory tracking app' },
    ],
  },
  {
    title: 'Stack61 - Warehouse Inventory',
    description:
      'Designed an intelligent warehouse management app with offline data capabilities using Realm and Firebase. Ensured seamless data sync between offline and online modes.',
    techStack: [
      'iOS',
      'Swift',
      'Realm',
      'Firebase',
      'Offline Storage',
      'MVVM',
      'REST APIs',
    ],
    date: 'June 2018 - May 2020',
    links: [],
    images: [
      { src: '/projects/stack61-preview.png', alt: 'Stack61 warehouse inventory management app' },
    ],
  },
  {
    title: 'Pipetrak IT',
    description:
      'Enhanced application functionalities and integrated geo-referenced data solutions for pipeline tracking and management on iOS.',
    techStack: [
      'iOS',
      'Swift',
      'Objective-C',
      'MapKit',
      'Core Location',
      'REST APIs',
    ],
    date: 'Oct 2017 - Nov 2019',
    links: [],
    images: [
      { src: '/projects/pipetrak-preview.png', alt: 'Pipetrak IT geo-referenced data solution' },
    ],
  },
  {
    title: 'MuscleMatics',
    description:
      'Built an anatomy-based fitness app with MVVM architecture and advanced UI design patterns. Featured detailed muscle group targeting and workout planning.',
    techStack: [
      'iOS',
      'Swift',
      'MVVM',
      'UIKit',
      'Core Animation',
      'Auto Layout',
    ],
    date: 'Dec 2017 - Feb 2018',
    links: [],
    images: [
      { src: '/projects/musclematics-preview.png', alt: 'MuscleMatics anatomy-based fitness app' },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'Mobile Lead',
    title: 'Petro IT Platform',
    src: '/projects/petroit-preview.png',
    content: (
      <ProjectContent project={{ title: 'Petro IT Platform' }} />
    ),
  },
  {
    category: 'Cross-Platform',
    title: 'Learn Buddhism',
    src: '/projects/learnbuddhism-preview.png',
    content: (
      <ProjectContent project={{ title: 'Learn Buddhism' }} />
    ),
  },
  {
    category: 'Flutter & Swift',
    title: 'TEN89',
    src: '/projects/ten89-preview.png',
    content: (
      <ProjectContent project={{ title: 'TEN89' }} />
    ),
  },
  {
    category: 'iOS Development',
    title: 'Stack61 - Warehouse Inventory',
    src: '/projects/stack61-preview.png',
    content: (
      <ProjectContent project={{ title: 'Stack61 - Warehouse Inventory' }} />
    ),
  },
  {
    category: 'iOS Development',
    title: 'Pipetrak IT',
    src: '/projects/pipetrak-preview.png',
    content: (
      <ProjectContent project={{ title: 'Pipetrak IT' }} />
    ),
  },
  {
    category: 'iOS Development',
    title: 'MuscleMatics',
    src: '/projects/musclematics-preview.png',
    content: (
      <ProjectContent project={{ title: 'MuscleMatics' }} />
    ),
  },
];