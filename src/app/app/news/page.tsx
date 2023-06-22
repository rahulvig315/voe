"use client";
import { headings, text } from '@/shared/styles/typography/styles.ts';
import { useEffect, useState } from "react";
type Props = {}


function Page({ }: Props) {
  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('/api/news').then(res => res.json()).then(({data}) => {
      console.log('data', data.results)
      setData(data.results);
      setLoading(false);
    })
  }, []);


  return (
    <div>
      <h1 className={headings.h1}>News</h1>
      <h2 className={headings.h2}>Trending</h2>

      {
        data && data.map((item: any) => (
          <>
          <h1>{item.title}</h1>
            <p className={text.normal}>{item.content}</p>
            <hr />
          </>
        )
        )}
    </div>
  )
}

export default Page