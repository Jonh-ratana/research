import Navbar from "./Navbar";

export default function Home(){


    return(
        <>
           

            <div className="container">
                <h2 className="text-center">Welcome to my Research Project Team</h2>
                <br />
                <div className="p-2 p_text">
                    <h4>My project focuses on the number of students who use bank accounts across 30 universities, based on research from students at various universities such as <b>UC . Beltie . RUPP . RULE</b> ,Out of 30 students, 18 are female and 12 are male. For more details, you can download the PDF and Excel files.</h4>
                    <br />
                    <hr />
                    <h4>To download file : please click 
                    <ul>
                        <li><a href="image/data.xlsx" download >Excel</a></li>
                    </ul>
                    </h4>
                    
                    <ul>
                        <li><a href="image/data.xlsx" download >PDF</a></li>
                    </ul>
                
                    <hr />
                </div>
                <img src="" alt="" />
            </div>
        </>
    )
}