import React from 'react'
import { Link } from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';


function Home() {
  return (
    <div>

<section>
  
  <div className="container-lg my-5 ">
  
<div className="row">
 
<div className="col-md-6 my-5">

<h1 className='fs-1 my-5'>WELCOME TO YOUR PERSONAL LIBRARY</h1>
<p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum, molestiae praesentium aperiam dolore, natus incidunt error repellat perspiciatis omnis delectus cumque reiciendis excepturi voluptatum aliquid sapiente quae, sequi dignissimos?</p>

<Link to={'/books'}>
<button className='btn btn-info'>Get Started</button>
</Link>



</div>

<div className="col-md-6 ">
<img src="https://cdn.pixabay.com/animation/2023/02/10/06/18/06-18-27-671_512.gif" alt="" />
</div>
</div>
</div>
</section>
      


<section>

<div className="container-lg my-5">

<div className="row ">
<div className='text-center my-5'>
<h2 className='text-black'>Books....</h2>
  </div>
<div className="col-md-3">
<MDBCard>
      <MDBCardImage src='https://immerse-cdn.promeai.pro/tenor/2f02056237de4d93a4c3877ad827279e.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
</div>
<div className="col-md-3">
<MDBCard>
      <MDBCardImage src='https://media3.giphy.com/media/AurFxpDAhkcytbCQUl/200w.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
</div>
<div className="col-md-3">
<MDBCard>
      <MDBCardImage src='https://media3.giphy.com/media/63w1IGRec5qFf0MFX8/giphy.gif?cid=6c09b952mxm4izatiejl17qmcipwr66lq2vumxpqy472hyup&ep=v1_gifs_search&rid=giphy.gif&ct=g' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
</div>


<div className="col-md-3">
<MDBCard>
      <MDBCardImage  src='https://media2.giphy.com/media/zE9AsyNrcj9yn0PJ0Z/200w.gif?cid=6c09b952g89u9y7w2kvrh9m4bucukd9fogf0snq3i8gts4c0&ep=v1_gifs_search&rid=200w.gif&ct=g' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
</div>
</div>

</div>



</section>



</div>

   
  )
}

export default Home