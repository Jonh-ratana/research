export default function Team() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>My Team</h1>
      <div className="all_card d-flex flex-wrap justify-content-center p-2">
      <div className="card-member p-2 m-3 rounded-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="image">
            <img
              src="src/components/image/ratana.jpg"
              alt="Poch Sameun"
              width={'100%'}
              height={'100%'}
              className="rounded-3"
            />
          </div>
          <div className="text ps-2">
          <h4 className="pt-3">Name : Yorm Ratana</h4>
            <h4 className="pt-3">ID : 65-23-01-23</h4>
            <h5>ទទួលខុសត្រូវផ្នែក : build flow chart and Develop website</h5>
            <br />
          </div>
        </div>
        {/* Card 1 */}
        <div className="card-member p-2 m-3 rounded-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="image">
            <img
              src="src/components/image/dara.jpg"
              alt="Poch Sameun"
              width={'100%'}
              height={'100%'}
              className="rounded-3"
            />
          </div>
          <div className="text ps-2">
            <h4 className="pt-3">Name : Doung Dara</h4>
            <h4 className="pt-3">ID : 65-23-00-44</h4>
            <h5>ទទួលខុសត្រូវផ្នែក : សរសេររៀបរាងឯកសារ</h5>
            <br />
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-member p-2 m-3 rounded-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="image">
            <img
              src="src/components/image/poch_samoeurn.jpg"
              alt="Poch Sameun"
              width={'100%'}
              height={'100%'}
              className="rounded-3"
            />
          </div>
          <div className="text ps-2">
          <h4 className="pt-3">Name : Poch Samoeurn</h4>
            <h4 className="pt-3">ID : 65-23-00-29</h4>
            <h5>ទទួលខុសត្រូវផ្នែក : ស្រាវជ្រាវ ស្រង់ data</h5>
            <br />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-member p-2 m-3 rounded-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="image">
            <img
              src="src/components/image/phument.jpg"
              alt="Poch Sameun"
              width={'100%'}
              height={'100%'}
              className="rounded-3"
            />
          </div>
          <div className="text ps-2">
          <h4 className="pt-3">Name : Pot Phumen</h4>
            <h4 className="pt-3">ID : 65-23-01-02</h4>
            <h5>ទទួលខុសត្រូវផ្នែក : ស្រាវជ្រាវ ស្រង់ data</h5>
            <br />
          </div>
        </div>

        {/* Card 4 */}
        <div className="card-member p-2 m-3 rounded-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="image">
            <img
              src="src/components/image/tivea.jpg"
              alt="Poch Sameun"
              width={'100%'}
              height={'100%'}
              className="rounded-3"
            />
          </div>
          <div className="text ps-2">
          <h4 className="pt-3">Name : AON TIVEA</h4>
            <h4 className="pt-3">ID : 65-23-00-70</h4>
            <h5>ទទួលខុសត្រូវផ្នែក : ជំនួយការរៀបរាងឯកសារ</h5>
            <br />
          </div>
        </div>

        
      </div>
    </>
  );
}
