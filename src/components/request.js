import Axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 *
 * @returns List of posts
 */

export const getPosts = async () => {
  return await Axios.get(`${BASE_URL}/posts`);
};
/**
 *
 * @param {String} pid - post id
 * @returns post details
 */
export const getPostDetails = async (pid) => {
  return await Axios.get(`${BASE_URL}/posts/${pid}`);
};

/**
 *
 * @param {String} uid - user id
 * @returns User details
 */
export const getUserDetails = async (uid) => {
  return await Axios.get(`${BASE_URL}/users/${uid}`);
};
export const getCommentOnPost = async (pid) =>
  await Axios.get(`${BASE_URL}/posts/${pid}/comments`);
