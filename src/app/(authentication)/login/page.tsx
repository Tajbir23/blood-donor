import Button from '@/utils/Button';

const page = () => {
  return (
    <div className="min-h-screen h-full flex items-center justify-center">
        <div className="border rounded-md bg-black/15 ">
            <form className="flex flex-col gap-5 p-10">
                
                <div className="flex gap-5 items-center justify-between">
                    <label htmlFor="username">Username <span className="text-red-600">*</span></label>
                    <input className="px-2 py-1" placeholder="Enter your usernmae" type="text" id="username" />
                </div>

                <div className="flex gap-5 items-center justify-between">
                    <label htmlFor="phone">Phone <span className="text-red-600">*</span></label>
                    <input className="px-2 py-1" placeholder="Enter your phone" type="tel" id="phone" required />
                </div>
                <div className="flex gap-5 items-center justify-between">
                    <label htmlFor="password">password <span className="text-red-600">*</span></label>
                    <input className="px-2 py-1" placeholder="Enter your password" type="password" id="password" required />
                </div>
                
                <Button className="bg-green-600" >Login</Button>

            </form>
        </div>
    </div>
  )
}

export default page