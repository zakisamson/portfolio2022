export interface TechUsed{
    id:number
    url:string
}
  
export interface Points{
    id:number
    point:string
}
  
export interface Experiences{
    id:number
    jobTitle:string
    companyName:string
    techUsed:TechUsed[]
    points:Points[]
    dateStarted:string
    dateEnded:string
}