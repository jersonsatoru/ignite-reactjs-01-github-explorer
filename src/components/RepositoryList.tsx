import React, { useEffect, useState } from 'react'
import { RepositoryItem } from './RepositoryItem'

interface Repository {
  id: number
  name: string
  description: string
  url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories([...data]))
  }, [])

  console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositories</h1>
      <ul>
        {repositories.map((repository) =>
          <RepositoryItem repository={repository} key={repository.id} />
        )}
      </ul>
    </section>
  )
}
