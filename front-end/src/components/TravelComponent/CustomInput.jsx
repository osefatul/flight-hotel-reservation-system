import React from 'react'

function CustomInput() {

    return (
        <div>CustomInput</div>
    )
}

export default CustomInput



{/* <div className="col" style={{ marginRight: "2rem" }}>
        
{this.props.flights.map((flight) => (
    <Card key={flight._id} style={{ marginBottom: "2rem" }}>
        <Card.Header>{flight.name}</Card.Header>
        <Card.Body>
        <Card.Title>{flight.airlines}</Card.Title>
        <Card.Text>
            <table style={{ width: "100%", tableLayout: "fixed" }}>
            <tbody>
                <tr>
                <td style={{ fontSize: "1.4rem" }}>{flight.from}</td>
                <td>
                    <span class="plane">
                    <svg
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        height="30"
                        width="30"
                        image-rendering="optimizeQuality"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g stroke="#222">
                        <line
                            fill="none"
                            stroke-linecap="round"
                            stroke-width="30"
                            x1="300"
                            x2="55"
                            y1="390"
                            y2="390"
                        />
                        <path
                            d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                            fill="#222"
                            stroke-linejoin="round"
                            stroke-width="10"
                        />
                        </g>
                    </svg>
                    </span>
                </td>
                <td style={{ fontSize: "1.4rem" }}>{flight.to}</td>
                <td style={{ fontSize: "1.4rem" }}>
                    {/* <span style={{ float: "right" }}> */}
//                     &#8377;{flight.fare}
//                     {/* </span> */}
//                 </td>
//                 <td>
//                     <Button
//                     variant="primary"
//                     onClick={() => this.bookNow(flight._id)}
//                     // href={"/book/" + flight._id}
//                     >
//                     Book now
//                     </Button>
//                 </td>
//                 </tr>
//             </tbody>
//             </table>
//             <span style={{ textAlign: "start" }}></span>
//         </Card.Text>
//         </Card.Body>
//     </Card>
//     ))}

//     <Modal
//     show={show}
//     // onHide={handleClose}
//     backdrop="static"
//     keyboard={false}
//     >
//     <Modal.Header closeButton>
//         <Modal.Title>Sign In</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>You need to sign in for booking a ticket</Modal.Body>
//     <Modal.Footer>
//         <Button variant="secondary" onClick={this.handleClose}>
//         Cancel
//         </Button>
//         <Button variant="primary" onClick={this.handleSignIn}>
//         Sign In
//         </Button>
//         <Button variant="primary" onClick={this.handleSignUp}>
//         Sign Up
//         </Button>
//     </Modal.Footer>
//     </Modal>
// </div> 
