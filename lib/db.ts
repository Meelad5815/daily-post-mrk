export type PostStatus="draft"|"approved"|"published"|"failed";
export type Post={id:string;topic:string;platform:string;title:string;body:string;hashtags:string[];status:PostStatus;scheduledAt:string;createdAt:string;};
const store:Post[]=[];
export const listPosts=()=>store;
export function createPost(x:Omit<Post,"id"|"createdAt">){const p={...x,id:crypto.randomUUID(),createdAt:new Date().toISOString()};store.unshift(p);return p}
export function updatePost(id:string,status:PostStatus){const p=store.find(x=>x.id===id);if(p)p.status=status;return p}