/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OekjNFTWkRj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto">
      <header className="bg-background border-b px-4 py-3 flex items-center justify-between">
        <h2 className="text-lg font-medium">Chat with John</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <SearchIcon className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoveHorizontalIcon className="w-4 h-4" />
          </Button>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="John" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[75%]">
              <p>Hey there! How's it going?</p>
              <div className="text-xs text-muted-foreground mt-1">10:30 AM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
              <p>I'm doing great, thanks for asking!</p>
              <div className="text-xs text-primary-foreground/80 mt-1">10:31 AM</div>
            </div>
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="You" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="John" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[75%]">
              <p>That's great to hear! I have some news to share with you.</p>
              <div className="text-xs text-muted-foreground mt-1">10:32 AM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
              <p>Oh, what is it?</p>
              <div className="text-xs text-primary-foreground/80 mt-1">10:32 AM</div>
            </div>
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="You" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="John" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[75%]">
              <p>I'm getting married! My girlfriend and I just got engaged last night.</p>
              <div className="text-xs text-muted-foreground mt-1">10:33 AM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
              <p>Wow, that's amazing! Congratulations!</p>
              <div className="text-xs text-primary-foreground/80 mt-1">10:33 AM</div>
            </div>
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="You" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="bg-background border-t px-4 py-3 flex items-center">
        <Textarea placeholder="Type your message..." className="flex-1 resize-none rounded-lg pr-12" rows={1} />
        <Button variant="ghost" size="icon" className="absolute right-4">
          <SendIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}