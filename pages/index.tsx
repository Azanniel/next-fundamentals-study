import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"

export default function Home({ repositories }) {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/azanniel/repos')

  const data = await response.json()
  const repositoryNames = data.map(item => item.name)

  return {
    props: {
      repositories: repositoryNames
    }
  }
}