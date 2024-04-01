import {useExplorePublicationsQuery} from "@/graphql/generated";
export default function Home(){
  const{
    data,isLoading,error
  }=useExplorePublicationsQuery(
      {endpoint:"@/graphql/schema.graphql",
        fetchParams:{
        }
      },{
        request:{

        }
      }
  );
  return <>Hello World</>
}


