export default function Professor() {


    return (

        <>
            <div className="all_card d-flex flex-wrap justify-content-center p-2">
                <h1 className="w-100 text-center">My professor</h1>
                <div className="card-member p-2 m-3 rounded-3 col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="image">
                        <img
                            src="src/components/image/professor.jpg"
                            alt="Poch Sameun"
                            width={'100%'}
                            height={'100%'}
                            className="rounded-3"
                        />
                    </div>
                    <div className="text ps-2">
                        <h4 className="pt-3">Name : Thay Vannak </h4>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}