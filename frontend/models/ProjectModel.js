// models/ProjectModel.js
// Defines the data structure for gallery projects

/**
 * @typedef {Object} ProjectItem
 * @property {string} id
 * @property {string} title
 * @property {string} category - 'residential' | 'commercial'
 * @property {string} location
 * @property {string} image
 * @property {string} description
 */

export class ProjectModel {
  constructor({ id, title, category, location, image, description = '' }) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.location = location;
    this.image = image;
    this.description = description;
  }
}
