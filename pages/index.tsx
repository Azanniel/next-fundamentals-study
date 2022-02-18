import { useEffect, useState } from "react"

export default function Home() {
  const [repositories, setRepositories] = useState<string[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/azanniel/repos')
      .then(response => response.json())
      .then(data => {
        const repositoryNames = data.map(item => item.name)

        setRepositories(repositoryNames)
      })
  }, [])

  return (
    <>
      <h2>Repositórios</h2>

      <ul>
        {repositories.map(repo => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  )
}
