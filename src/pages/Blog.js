import styled from "@emotion/styled"
import { IoIosArrowBack } from "react-icons/io"
import {RiSearchLine} from "react-icons/ri"
import { colors } from "../styles/colors"
import { useEffect, useState } from "react"
import { Articles } from "../articles"
import ArticlePost from "../components/articles-post"
import { Link } from "react-router-dom"
import Banner from "../components/banner"

const SearchDiv = styled.div`
  display:flex;
  align-items:center;
  gap:8px;
  width:300px;
  padding:2px;
  padding-left:10px;
  border-radius:6px;
  &:focus-within{
    outline: 2px solid black;
  }
`
const StyledInput = styled.input`
  border:none;
  &:focus{
    outline: none;
    
  }
`
const Wrapper = styled.div`
  min-height:800px;
  padding: 24px;
  @media(max-width:400px){
    padding:12px;
  }
`
const Div = styled.div`
  display:grid;
  column-gap:20px;
  grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
  padding: 20px;
  gap:20px;
  row-gap:80px;
  @media(max-width:500px){
    padding: 0;
  }
`
export default function Blog(){
  const [search, setSearch] = useState("")
  const [filterArticles, setFilterArticles] = useState(Articles)
  
  useEffect(() => {
    setFilterArticles(Articles.filter(article => article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
                                                 article.keywords.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                                                 article.etiquetas.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
                                     )
                     )
  }, [search])
  
  
  return(
    <>
      <Wrapper>
        <SearchDiv>
          {search ==="" ? 
            <RiSearchLine style={{color: `${colors.gray.light}`}}/> 
          : 
            <IoIosArrowBack style={{color: `${colors.gray.light}`}}/>
          }
          <StyledInput type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={"Search"}/>
        </SearchDiv>
        <Div>
          {filterArticles.map(article=>{
            if(article.url){
              return(
                <Link to={article.url} style={{textDecoration:"none", width:"300px" }}>
                  <ArticlePost article={article} />
                </Link>
              )
            }else{
              return(
                <ArticlePost article={article} />
              )
            }
          })}
        </Div>
      </Wrapper>
      <Banner show={true} blog={true}/>
    </>
  )
}