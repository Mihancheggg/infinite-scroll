/**
 * Object describes API methods for users
 */
export const UsersAPI = {
    /**
     * Method makes a request to server API to get users for rendering
     * @param {number} currentPage number of page that you want to load
     * @param {number} numberOfResults amount of users that one page contains
     * @returns {Promise} object fulfilled with array of users and additional data
     */
    getUsers(currentPage: number, numberOfResults: number) {
        return fetch(`https://randomuser.me/api/?page=${currentPage}&results=${numberOfResults}`)
    }
}