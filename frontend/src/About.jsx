import './index.css'
const About =()=>
{
    return(
        <>
        <div className='sm:px-20 xl:px-50 2xl:px-100 pt-30 '>
            <p className='text-6xl py-8 text-center'><b>Developers</b></p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 text-gray-50 '>
            <div className='text-3xl relative  w-120 lg:w-120 p-8 border hover:scale-105 duration-300 hover:bg-slate-500 bg-slate-800 rounded-md'>
                <p>Name:<br/> Araphat Maruf</p>
                <p>Email :<br/> empty</p>
            </div>
            <div className='text-3xl relative  w-120 p-8 border hover:scale-105 duration-300 hover:bg-slate-500 bg-slate-800 rounded-md'>
                <p>Name:<br/>Md.Iftekhar Alam</p>
                <p>Email :<br/> iftekharalam5623@gmail.com</p>
            </div>
            <div className='text-3xl relative  w-120 p-8 border hover:scale-105 duration-300 hover:bg-slate-500 bg-slate-800 rounded-md'>
                <p>Name:<br/> Farhadul Islam</p>
                <p>Email :<br/> empty</p>
            </div>
            <div className='text-3xl relative  w-120 p-8 border hover:scale-105 duration-300 hover:bg-slate-500 bg-slate-800 rounded-md'>
                <p>Name:<br/> Abdullah Omar</p>
                <p>Email :<br/> empty</p>
            </div>
        </div>
        <div className='text-center'>
            <p className='py-6 text-5xl'><b>Project Overview</b></p>
            <div className='hover:scale-105 duration-300 hover:bg-slate-500 bg-slate-800 rounded-md'>
                <p className='text-2xl text-gray-50 p-5'>Mx-Novel is a web-based platform that allows users to create accounts, browse, and purchase novels, with access to read only the novels they have bought. The platform features an admin panel where administrators can manage novels, edit or remove content, and oversee user activities. With secure authentication and controlled access, Mx-Novel provides a safe, organized, and interactive environment for reading digital novels and managing content efficiently.</p>
            </div>
        </div>
        <div className='text-center'>
            <p className='py-6 text-5xl'><b>Mission & vision</b></p>
            <div className='hover:scale-105 duration-300 hover:bg-slate-500 bg-slate-800 rounded-md'>
                <p className='text-2xl text-gray-50 p-5'>Mission: To provide readers with a secure, interactive, and accessible platform for discovering, purchasing, and reading novels online. We aim to ensure that users can enjoy quality content while protecting digital works and maintaining a seamless reading experience.

Vision: To become a leading digital novel platform that connects readers and authors, promotes reading culture, and offers efficient management tools for administrators, creating a trusted and organized space for digital literature worldwide.</p>
            </div>
        </div>
        </div>
        <br/>
        <br/>
        </>
    );
}
export default About;