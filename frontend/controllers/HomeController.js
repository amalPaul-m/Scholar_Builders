// controllers/HomeController.js
// Controller for the home page — currently uses mock data
// Future: replace with API calls

import { heroSlides, servicesData, projectsData, testimonialsData } from '@/data/mockData';

export class HomeController {
  /**
   * Get hero carousel slides
   * @returns {Array}
   */
  static getHeroSlides() {
    return heroSlides;
  }

  /**
   * Get all services
   * @returns {ServiceModel[]}
   */
  static getServices() {
    // Return plain objects so data can be passed to Client Components.
    return servicesData.map((s) => ({ ...s }));
  }

  /**
   * Get featured projects (first 6)
   * @param {string|null} category - optional filter
   * @returns {ProjectModel[]}
   */
  static getProjects(category = null) {
    // Return plain objects so data can be passed to Client Components.
    const projects = projectsData.map((p) => ({ ...p }));
    if (category) {
      return projects.filter((p) => p.category === category);
    }
    return projects;
  }

  /**
   * Get testimonials
   * @returns {TestimonialModel[]}
   */
  static getTestimonials() {
    // Return plain objects so data can be passed to Client Components.
    return testimonialsData.map((t) => ({ ...t }));
  }
}
