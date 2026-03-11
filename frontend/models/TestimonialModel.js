// models/TestimonialModel.js

/**
 * @typedef {Object} TestimonialItem
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} review
 * @property {number} rating - 1 to 5
 * @property {string} avatar
 */

export class TestimonialModel {
  constructor({ id, name, role, review, rating = 5, avatar = '' }) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.review = review;
    this.rating = rating;
    this.avatar = avatar;
  }
}
