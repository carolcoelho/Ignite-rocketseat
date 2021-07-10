import React from 'react'
import Counter from './componets/counter'
import RepositoryList from './componets/RepositoryList'
import './styles/global.scss'

export function App() {

    return (
        <>
            <RepositoryList></RepositoryList>
            <Counter />
        </>
    )
}
