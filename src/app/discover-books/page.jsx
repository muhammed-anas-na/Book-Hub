const { default: Header } = require("@/components/Header")
const { default: Row } = require("@/components/Row")

const DiscoverBook = ()=>{
    return(
        <>
        <Header/>
        <div className="mt-20">
            <Row title={"Suggested Books"}/>
            <Row title={"Nearest Books"}/>
        </div>
        </>
    )
}

export default DiscoverBook;