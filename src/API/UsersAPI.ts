export const UsersAPI = {
    getUsers(currentPage: number, numberOfResults: number) {
        return fetch(`https://randomuser.me/api/?page=${currentPage}&results=${numberOfResults}`)
    }
}