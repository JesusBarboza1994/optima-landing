import styled from "@emotion/styled"
import { IoIosArrowBack } from "react-icons/io"
import {RiSearchLine} from "react-icons/ri"
import { colors } from "../styles/colors"
import { useEffect, useState } from "react"
import { Articles } from "../articles"
import ArticlePost from "../components/articles-post"

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
`
const Div = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  padding: 20px;
  gap:20px;
  @media(max-width:1200px){
    flex-direction:column;
    align-items:center;
  }
`
export default function Blog(){
  const [search, setSearch] = useState("")
  const [filterArticles, setFilterArticles] = useState(Articles)
  
  useEffect(() => {
    setFilterArticles(Articles.filter(article => article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
                                                 article.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                                                 article.keywords.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                                                 article.etiqueta.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
                                     )
                     )
  }, [search])
  
  
  return(
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
          return(
            <ArticlePost article={article} />
          )
        })}
      </Div>
    </Wrapper>
  )
}