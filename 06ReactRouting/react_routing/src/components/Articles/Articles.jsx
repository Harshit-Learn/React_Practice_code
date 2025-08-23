import React from 'react'
import { useSearchParams} from "react-router-dom";
const Articles = () => {

  // Adding the useSearchParams hook by whis we set the key on URL.
   const [SearchParams , setSearchParams] = useSearchParams();
   console.log(SearchParams , setSearchParams )

   // get the value of sortBy
   const sortBy= SearchParams.get("sortBy")

  // get the value of category
   const category= SearchParams.get("category")

      // Button:  handleClic method
   const handleClick = ()=>{
    setSearchParams({
      sortBy:"true",
      category:"electronic"
    });
   }
    
   // Real Life Example of Query Strings

   // Dummy data
const productsData = [
  { id: 1, title: "Laptop Review", views: 250 , category:"electronic"},
  { id: 2, title: "smart Phone Tips", views: 300 ,category:"electronic" },
  { id: 3, title: "Headphones", views: 100 ,category:"electronic" },
  { id: 4, title: "Keyboard", views: 150 , category:"electronic" },
];

   let filterData =  productsData; // new variable me add kr diya
    
   if(category){
    filterData= filterData.filter(
      (article)=>article.category === category
    );
  }

    if(sortBy==="true"){

      // a-b = 1 to 3( accending order)  & b-a = 3 to 1 ( Decending Order)
      filterData = [...filterData].sort((a,b)=>b.views - a.views)
    }

  return (
    <div>
      <h2>Articles
      <p>SortBy: {sortBy} Categary:{category} </p>
       </h2>
      <button onClick={handleClick}>sortBy view</button>

      <ul>
        { filterData.map((article)=>(
          <li key = {article.id}> {article.title} -  {article.views} views ({article.category})</li>
        ))} 
      </ul>
    </div>
  )
}

export default Articles
