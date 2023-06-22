import React from 'react'

type Props = {
    item: {
        title: string,
        content: string,

    }
}

const NewsCard = (({item}: Props) => {
  return (
    <div>NewsCard</div>
  )
})