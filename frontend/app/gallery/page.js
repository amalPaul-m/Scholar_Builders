import GalleryShowcase from '@/components/GalleryShowcase';
import { HomeController } from '@/controllers/HomeController';

export const metadata = { title: 'Gallery â€” Scholar Builders' };

export default function GalleryPage() {
  const projects = HomeController.getProjects();
  return <GalleryShowcase projects={projects} />;
}
