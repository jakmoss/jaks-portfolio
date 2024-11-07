import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio  
      </h1>
      <p className="mb-4">
        {`Hi this is my online portfolio
        สวัสดีครับผมชื่อ "นายจักรกฤษณ์ พีเตอร์ มอส" นี่คือ พอร์ตโฟลิโอออนไลน์ ที่ผมได้สร้างขึ้นมาโดยใช้ Github
        
        .`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
