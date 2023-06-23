import Image from "next/image";
type Props = {
  item: {
    title: string,
    content: string,
    [prop: string]: any,
  }
}

const NewsCard = (({ item }: Props) => {

  return (

    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 hover:dark:bg-neutral-700 flex justify-center w-full gap-5">

      <div className="w-full">
        <a href="#">
          <h5 className="mb-2 p-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2 h-fit`}>{item.content}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-700 hover:bg-neutral-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black dark:hover:bg-netral-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>

      </div>
      <div className="">
        {item?.image_url && <Image className="" src={item?.image_url} width={250} height={250} alt="" placeholder="empty" />}

      </div>
    </div>

  )
});

export default NewsCard;