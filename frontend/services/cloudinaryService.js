// services/cloudinaryService.js
// Utility for building optimised Cloudinary image URLs

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Build an optimised Cloudinary URL
 * @param {string} publicId - the Cloudinary public ID
 * @param {Object} options
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {string} [options.crop='fill']
 * @returns {string}
 */
export function getCloudinaryUrl(publicId, { width, height, crop = 'fill' } = {}) {
  const transforms = ['f_auto', 'q_auto'];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height) transforms.push(`c_${crop}`);

  return `${BASE_URL}/${transforms.join(',')}/${publicId}`;
}

/**
 * Get hero image URL
 */
export function getHeroImageUrl(publicId) {
  return getCloudinaryUrl(publicId, { width: 1920, height: 1080 });
}

/**
 * Get thumbnail URL for gallery
 */
export function getThumbnailUrl(publicId) {
  return getCloudinaryUrl(publicId, { width: 600, height: 400 });
}
