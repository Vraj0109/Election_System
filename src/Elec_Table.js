import React from 'react'
import Footer from './Footer';
import { Navbar } from "./Navbar";
export const Table = () => {
    return (
        <div>
            <Navbar />
            <br></br>
            <h2>Upcoming Elections</h2>
            <br></br>

            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">State Name</th>
                            <th scope="col">Current Tenure</th>
                            <th scope="col">Election Year</th>
                            <th scope="col">Total AC</th>
                            <th scope="col">Total PC</th>
                            <th scope="col">Total Rajyasabha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr'>
                            <th scope="row"><br />1</th>
                            <td><br />Gujarat</td>
                            <td><br />Dec 2017 - Dec 2022</td>
                            <td>2022 <br />
                                Polling dates : 01,05 Dec 2022 <br />
                                Result Dates : 08 Dec 2022
                            </td>
                            <td><br></br>182</td>
                            <td><br></br>26</td>
                            <td><br></br>11</td>
                        </tr>
                        <tr className='tr'>
                            <th scope="row"><br />2</th>
                            <td><br />Himachal Pradesh</td>
                            <td><br />Dec 2017 - Dec 2022</td>
                            <td>2022 <br />
                                Polling dates : 12 Nov 2022 <br />
                                Result Dates : 08 Dec 2022</td>
                            <td><br></br>68</td>
                            <td><br></br>4</td>
                            <td><br></br>3</td>
                        </tr>
                        <tr className='tr'>
                            <th scope="row">3</th>
                            <td>Meghalaya</td>
                            <td>6 March, 2018 - 5 March, 2023</td>
                            <td>2023</td>
                            <td>60</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                        <tr className='tr'>
                            <th scope="row">4</th>
                            <td>Nagaland</td>
                            <td>6 March, 2018 - 5 March, 2023</td>
                            <td>2023</td>
                            <td>60</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr className='tr'>
                            <th scope="row">5</th>
                            <td>Tripura</td>
                            <td>14 March, 2018 - 13 March, 2023</td>
                            <td>2023</td>
                            <td>60</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                        <tr className='tr'>
                            <th scope="row">6</th>
                            <td>Karnataka</td>
                            <td>29 May, 2018 - 28 May, 2023</td>
                            <td>2023</td>
                            <td>224</td>
                            <td>28</td>
                            <td>12</td>
                        </tr>
                        <tr className='tr'>
                            <th scope="row">7</th>
                            <td>Rajasthan</td>
                            <td>10 Dec, 2018 - 20 Jan, 2023</td>
                            <td>2023</td>
                            <td>200</td>
                            <td>25</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

// export default Table
