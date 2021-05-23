export default async function getDataGitHub() {
    const response = await fetch('https://api.github.com/users/juninho-silva')
    return response.json()
}