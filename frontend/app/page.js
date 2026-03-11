import HomeView from '@/views/HomeView';
import { HomeController } from '@/controllers/HomeController';

export const metadata = {
  title: 'Scholar Builders — Professional Construction Company Perumbavoor Kerala',
  description:
    'Scholar Builders provides construction, industrial building, town planning approvals, fire NOC, pollution control approval, and premium interior works across Ernakulam, Kerala.',
};

export default function HomePage() {
  const heroSlides = HomeController.getHeroSlides();
  const services = HomeController.getServices();
  const projects = HomeController.getProjects();
  const testimonials = HomeController.getTestimonials();

  return (
    <HomeView
      heroSlides={heroSlides}
      services={services}
      projects={projects}
      testimonials={testimonials}
    />
  );
}
