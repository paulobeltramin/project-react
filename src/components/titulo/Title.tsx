 export type titleProps={
    children:string
    fontSize?:number
 }


export const Title=(titulo:titleProps)=>{
    return(
        <>
          <h3>{titulo.children}</h3>
        </>
    )
}