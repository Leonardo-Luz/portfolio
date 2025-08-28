export interface GithubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  stargazers_count: number
  html_url: string
  starred?: boolean
  [key: string]: any
}

export async function getRepo(repo: string, token?: string): Promise<GithubRepo> {
  const res = await fetch(`https://api.github.com/repos/leonardo-luz/${repo}`, {
    headers: token ? { Authorization: `token ${token}` } : {},
  })

  if (res.status === 403) {
    const reset = res.headers.get("X-RateLimit-Reset")
    throw {
      message: "Rate limit exceeded.",
      description: `Try again at ${reset ? new Date(Number(reset) * 1000).toLocaleTimeString() : "later"}`,
    }
  }

  if (!res.ok) throw { message: "Failed to fetch repo", description: `HTTP status ${res.status}` }

  return (await res.json()) as GithubRepo
}

export async function checkStar(repo: string, token?: string): Promise<boolean> {
  if (!token) return false

  const res = await fetch(`https://api.github.com/user/starred/leonardo-luz/${repo}`, {
    headers: { Authorization: `token ${token}` },
  })

  if (res.status === 204) return true
  if (res.status === 404) return false

  throw { message: "Failed to check star", description: `HTTP status ${res.status}` }
}

export async function starRepo(repo: string, token: string) {
  const res = await fetch(`https://api.github.com/user/starred/leonardo-luz/${repo}`, {
    method: "PUT",
    headers: { Authorization: `token ${token}` },
  })

  if (!res.ok && res.status !== 204) throw { message: "Failed to star repo", description: `HTTP status ${res.status}` }
}

export async function unstarRepo(repo: string, token: string) {
  const res = await fetch(`https://api.github.com/user/starred/leonardo-luz/${repo}`, {
    method: "DELETE",
    headers: { Authorization: `token ${token}` },
  })

  if (!res.ok && res.status !== 204) throw { message: "Failed to unstar repo", description: `HTTP status ${res.status}` }
}
