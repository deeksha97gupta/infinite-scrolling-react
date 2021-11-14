import React, { useState, useRef, useCallback } from 'react'
import useBookSearch from './useBookSearch'
import PropTypes from 'prop-types';
import './BookList.css';

export default function BookList({ setToken }) {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setToken("");
  }

  return (
    <>
      <div className="logout-wrapper">
        <form onSubmit={handleSubmit}>
          <button type="submit">Logout</button>
        </form>  
      </div>
      Book Name:
      <br/>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}

BookList.propTypes = {
    setToken: PropTypes.func.isRequired
  };
