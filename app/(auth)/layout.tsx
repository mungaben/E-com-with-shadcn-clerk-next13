





export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="">
        {children}
      </div>
    </div>
  )
}
