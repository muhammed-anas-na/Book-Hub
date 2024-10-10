import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
import { GET_USER_QUERIES_FN } from "../../Axios/methods/POST";

  
  export default function ListCallback({userId}) {
    const [queries, setQueries] = useState([]);
    useEffect(()=>{
      (async function(){
        const response = await GET_USER_QUERIES_FN(userId);
        setQueries(response.data.callbacks);
      })()

    },[])
    console.log("Queries =>",queries);;
    return (
        <ScrollArea className="h-96 w-3/4">
        <Table className="">
        <TableCaption>A list of your recent queries.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Cover</TableHead>
            <TableHead>Book Name</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Number</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
       
          {queries?.map((query) => (
            <TableRow key={query.bookId}>
              <TableCell className="font-medium">
                <img src={query.selectedBookCover} alt="cover-image" />
              </TableCell>
              <TableCell>{query.title}</TableCell>
              <TableCell>{query.name}</TableCell>
              <TableCell className="text-right">{query.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
      </ScrollArea>
    )
  }
  