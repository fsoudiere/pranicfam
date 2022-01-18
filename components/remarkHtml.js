import {unified} from 'unified'
import remark from 'remark'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import html from 'remark-html'

export default function RemarkHtml( card ) {
    const file = unified()
    .use(remarkParse)
    .use(remarkHtml)  
    .process(card) 
    .then(
      (file) => {
        console.log(String(file))
      },)
    
    const contentHtml = file
    console.log(card, contentHtml)

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
}
