/**
 * High-Coherency Example - Passes Derived Covenant
 * Pure, well-documented, error-handled, reusable functions.
 */

/**
 * Adds two numbers and returns double the result.
 * Pure function - no side effects.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Double the sum
 */
function addAndDouble(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  const sum = a + b;
  return sum * 2;
}

/**
 * Safely fetches and parses JSON from a URL.
 * @param {string} url - The URL to fetch
 * @returns {Promise<any>} Parsed JSON data
 */
async function safeFetchJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch failed for ${url}:`, error.message);
    throw error; // Let caller handle or use fallback
  }
}

module.exports = { addAndDouble, safeFetchJson };
