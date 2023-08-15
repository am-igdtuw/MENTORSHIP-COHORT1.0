import { ImFacebook,ImYoutube,ImTwitter} from 'react-icons/im';
import Link from 'next/link';
import Image from "next/image"

export default function Header() {
  return (
    <header className="px-5"> 
        <div className="container flex flex-col items-center sm:flex-row sm:justify-between mx-10 py-3">
        
        <div className='mx-4'>
            <input type="text" className="input-text" placeholder="Search.." />
        </div>
          <div className="  sm:order-2  justify-center px-30 ">
        
        <Link href={"/"}><Image src={"/images/logo/logoblog.jpg"} alt='' width={100} height={100}/></Link>
        
      
        </div>
        
        <div className="w-96 h-5 order-3 flex justify-center">
            <div className="flex gap-6">
                <a><ImFacebook color='blue'/></a>
                <a><ImYoutube color='red'/></a>
                <a><ImTwitter color='blue'/></a>
                
            </div>
           
           
          {     //button
           /* <div className="w-96 order-3 flex justify-center ">
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Green</button>
        </div>  */} 
        </div>
    </div>
</header>
)
}
