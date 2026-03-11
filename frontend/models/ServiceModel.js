// models/ServiceModel.js
// Defines the data structure for services

/**
 * @typedef {Object} ServiceItem
 * @property {string} id
 * @property {string} icon
 * @property {string} title
 * @property {string} description
 * @property {string[]} benefits
 * @property {string} image
 */

export class ServiceModel {
  constructor({ id, icon, title, description, benefits = [], image = '' }) {
    this.id = id;
    this.icon = icon;
    this.title = title;
    this.description = description;
    this.benefits = benefits;
    this.image = image;
  }
}
