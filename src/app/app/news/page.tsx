"use client";
import NewsCard from "@/components/news/NewsCard";
import ButtonGroup from "@/components/shared/ButtonGroup";
import { headings } from '@/shared/styles/typography/styles.ts';
import { useEffect, useState } from "react";
type Props = {}


function Page({ }: Props) {
  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)
  const [activeRegion, setActiveRegion] = useState('');
  const [activeGrouping, setActiveGrouping] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('/api/news').then(res => res.json()).then(({ data }) => {
      console.log('data', data.results)
      setData(data.results);
      setLoading(false);
    })
  }, []);


  return (
    <div className='w-full p-16 dark:bg-neutral-800 bg-neutral-200 rounded-xl shadow-2xl overflow-auto'>
      <div className='flex justify-evenly align-end items-center gap-5 xs:flex-col xs:flex-wrap'>
      <h1 className={headings.h1}> {activeGrouping} {activeRegion} News</h1>
        <span className="flex items-baseline p-1">    <label className="font-bold">Region:</label>   <ButtonGroup active={activeRegion} onActive={setActiveRegion} labels={['World', 'National', 'State', 'City', 'Neighborhood']} /></span>
        <span className="flex items-baseline p-1">        <label className="font-bold">Filter:</label><ButtonGroup active={activeGrouping} onActive={setActiveGrouping} labels={['Breaking', 'Latest', 'Top']} /></span>
      </div>
      <br />
      <hr />


      <div className="flex mt-8 flex-wrap justify-center items-center w-fit max-w-full gap-3">
        {data && data.map((item: any, idx: number) => (
          <NewsCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Page