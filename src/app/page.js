import Answer from "@/components/answer/Answer";
import Details from "@/components/details/Details";
import Hero from "@/components/heroSection/Hero";
import Included from "@/components/included/Included";
import Insurance from "@/components/insurance/Insurance";
import Models from "@/components/models/Models";
import Online from "@/components/online/Online";
import Premium from "@/components/premium/Premium";
import Rating from "@/components/rating/Rating";
import Search from "@/components/search/Search";
import Swapper from "@/components/swapper/Swapper";
import Table from "@/components/table/Table";
import Things from "@/components/things/Things";
import ThirdParty from "@/components/thirdparty/ThirdParty";


export default function Home() {
  return (
    <>
        <div className='w-full font-mulish'>
          <Hero />
          <Details />
          <Insurance />
          <Swapper />
          <ThirdParty />
          <Online />
          <Included />
          <Things />
          <Premium />
          <Answer />
          <Rating />
          <Search />
          <Models />
          <Table />

          
          
        </div>
        

    </>
  );
}
