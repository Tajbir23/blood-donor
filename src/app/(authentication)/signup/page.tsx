import Button from "@/utils/Button"


const page = () => {
  return (
    <div className="min-h-screen h-full flex items-center justify-center">
        <div className="border rounded-md bg-black/15 backdrop-blur-3xl">
            <form className="flex flex-col gap-5 p-10">
                <div className="flex items-center justify-between">
                    <label htmlFor="Name">Name <span className="text-red-600">*</span></label>
                    <input className="px-2 py-1" placeholder="Enter your full name" type="text" id="name" required />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="username">Username <span className="text-red-600">*</span></label>
                    <input className="px-2 py-1" placeholder="Enter your usernmae" type="text" id="username" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="email">Email</label>
                    <input className="px-2 py-1" placeholder="Enter your email" type="email" id="email" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="phone">Phone <span className="text-red-600">*</span></label>
                    <input className="px-2 py-1" placeholder="Enter your phone" type="tel" id="phone" required />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password">password <span className="text-red-600">*</span></label>
                    <input className="px-2 py-1" placeholder="Enter your password" type="password" id="password" required />
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <select className="p-2 w-full" id="division" required>
                        <option value="">Select Division </option>
                        <option value="division1">Division 1</option>
                        <option value="division2">Division 2</option>
                        <option value="division3">Division 3</option>
                    </select>
                    <select className="p-2 w-full" id="district" required>
                        <option value="">Select district </option>
                        <option value="district1">district 1</option>
                        <option value="district2">district 2</option>
                        <option value="district3">district 3</option>
                    </select>
                    <select className="p-2 w-full" id="upozila" required>
                        <option value="">Select upozilla </option>
                        <option value="upozila1">upozila 1</option>
                        <option value="upozila2">upozila 2</option>
                        <option value="upozila3">upozila 3</option>
                    </select>
                </div>
                <Button className="bg-green-600" >Login</Button>
            </form>
        </div>
    </div>
  )
}

export default page