import React from 'react'

interface RepositoryListProps {
  repository: {
    name: string
    description: string
    url: string
  }
}

export function RepositoryItem(props: RepositoryListProps) {
  return (
    <>
      <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href="">{props.repository.url}</a>
      </li>
    </>
  )
}
