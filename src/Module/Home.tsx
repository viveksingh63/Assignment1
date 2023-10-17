import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img1 from './img/profits-dollar-svgrepo.png.png';
import img2 from './img/order-svgrepo-com.png';
import img3 from './img/wallet-svgrepo-com.png';
import img4 from './img/sales-shop-analytics-svgrepo-com.png';
import img5 from './img/pie-chart-svgrepo-com.png';
import { BarChart, Bar, PieChart, Pie, Sector, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Home: React.FC = () => {

    const data = [
        { uv: 4000 }, { uv: 3000 }, { uv: 2000 }, { uv: 2780 }, { uv: 1890 }, { uv: 2390 }, { uv: 3490 }, { uv: 4500 }, { uv: 5400 }, { uv: 3490 }, { uv: 1200 }, { uv: 2460 }
    ];


    // const datapie = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    // ];
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    return (
        <div className="body">

            <div className="container-fluid bg-success">
                <div className="container">
                    <nav className="navbar navbar-expand navbar-dark">
                        <h1 className="navbar-brand logo">Assignment</h1>
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="#" className="nav-link"><button className="btn btn-success">Dashboard</button>
                                </a></li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="dropdown">
                                            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                Product
                                            </button>
                                            <ul className="dropdown-menu" >
                                                <li><a className="dropdown-item" href="#">Product List</a></li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="dropdown">
                                            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                Customers
                                            </button>
                                            <ul className="dropdown-menu" >
                                                <li><a className="dropdown-item" href="#">Monthly</a></li>
                                            </ul>
                                        </div>
                                    </a> </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="dropdown">
                                            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                Income
                                            </button>
                                            <ul className="dropdown-menu" >
                                                <li><a className="dropdown-item" href="#">Monthly</a></li>
                                            </ul>
                                        </div>
                                    </a> </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="dropdown">
                                            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                Promote
                                            </button>
                                            <ul className="dropdown-menu" >
                                                <li><a className="dropdown-item" href="#">Monthly</a></li>
                                            </ul>
                                        </div>
                                    </a> </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <div className="dropdown">
                                            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                Help
                                            </button>
                                            <ul className="dropdown-menu" >
                                                <li><a className="dropdown-item" href="#">Monthly</a></li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="header m-2">
                <h5>Hello, vivek</h5>
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                    <input type="search" placeholder="search" className="input" />

                </div>
            </div>

            <div className="header-1">
                <div className="earning">
                    <div className="image">
                        <img srcSet={img1} alt="" />
                    </div>
                    <div className="info">
                        <p>Earning</p>
                        <h4>$198k</h4>
                        <h6><i style={{ color: "green" }}>37.8%</i> this month</h6>
                    </div>
                </div>
                <div className="order">
                    <div className="image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="info">
                        <p>Orders</p>
                        <h4>$2.4k</h4>
                        <h6><i style={{ color: "pink" }}>37.8%</i> this month</h6>
                    </div>
                </div>
                <div className="balance">
                    <div className="image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="info">
                        <p>Balance</p>
                        <h4>$2.4k</h4>
                        <h6><i style={{ color: "pink" }}>37.8%</i> this month</h6>
                    </div>
                </div>
                <div className="sales">
                    <div className="image">
                        <img src={img4} alt="" />
                    </div>
                    <div className="info">
                        <p>Total Sales</p>
                        <h4>$89k</h4>
                        <h6><i style={{ color: "green" }}>37.8%</i> this month</h6>
                    </div>
                </div>
            </div>

            <div className="header-2">
                <div className="left">
                    <div className="over">
                        <div className="left1">
                            <h4>Overview</h4>
                            <p>Monthly Earnings</p>
                        </div>
                        <div className="left2">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    Quaterly
                                </button>
                                <ul className="dropdown-menu" >
                                    <li><a className="dropdown-item" href="#">Monthly</a></li>
                                    <li><a className="dropdown-item" href="#">Quaterly</a></li>
                                    <li><a className="dropdown-item" href="#">Half Yearly</a></li>
                                    <li><a className="dropdown-item" href="#">Yearly</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="graph">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data}>
                                <Bar dataKey="uv" fill="#8884d8" name="jan" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="right">
                    <div className="customer">
                        <h4>Customers</h4>
                        <p>Customers that buy products</p>
                    </div>
                    <div className="piechart">
                        {/* <PieChart width={800} height={400} >
                            <Pie
                                data={datapie}
                                cx={120}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Pie
                                data={data}
                                cx={420}
                                cy={200}
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart> */}
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="above">
                    <div className="left3"><h4>Product Sell</h4></div>
                    <div className="middle">
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                        <input type="search" placeholder="Search" className="btn" style={{ backgroundColor: "rgb(247, 244, 240)" }} /></div>
                    <div className="right3">
                        <div className="dropdown">
                            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Last 30 Days
                            </button>
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="#">Monthly</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="below">
                    <table className="table table-hover" style={{alignItems:"self-start"}}>
                        <thead>
                            <tr>
                                <th><p>Product Name</p></th>
                                <th><p>Stock</p></th>
                                <th><p>Price</p></th>
                                <th><p>Total Sales</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h4>Abstract 3D</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, est.</p></td>
                                <td>32 in stock</td>
                                <td>$ 45.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><h4>Sarphens Illustration</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, amet.</p></td>
                                <td>32 in stock</td>
                                <td>$ 45.99</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;