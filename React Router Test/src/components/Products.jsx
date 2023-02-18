import React from "react";
import { Link, Route, Routes, useParams, useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    category: "Mother Board",
    product: "MSI B450M PRO-VDH MAX",
    price: 89.99,
    description:
      "AMD AM4, DDR4, SATA3, M.2, HDMI, DVI-D, USB 3.2 Gen 2, A&GbE, MicroATX",
  },
  {
    id: 2,
    category: "Hard drive",
    product: "Seagate BarraCuda 1TB",
    price: 44.99,
    description:
      "3.5 Inch SATA 6Gb/s 7200 RPM 64MB Cache for Computer Desktop PC",
  },
  {
    id: 3,
    category: "CPU",
    product: "AMD Ryzen 5 3600",
    price: 199.99,
    description:
      "6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler",
  },
  {
    id: 4,
    category: "GPU",
    product: "MSI GeForce GTX 1660 SUPER",
    price: 229.99,
    description: "Ventus XS OC Edition 6GB GDDR6, HDMI, DisplayPort, Dual Fan",
  },
  {
    id: 5,
    category: "RAM",
    product: "Corsair Vengeance LPX 16GB",
    price: 79.99,
    description:
      "DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black (CMK16GX4M2B3200C16)",
  },
  {
    id: 6,
    category: "Case",
    product: "NZXT H510 - Compact ATX Mid-Tower PC Gaming Case",
    price: 69.99,
    description: "Tempered Glass Side Panel - Black",
  },
];

const Product = () => {
  const { productid } = useParams();
  const filteredProduct = data.filter((item) => {
    return item.id === parseInt(productid);
  });

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h3>
          Category: {filteredProduct[0].category} <br />
        </h3>
        <h3>
          Product: {filteredProduct[0].product} <br />
        </h3>
        <h3>
          Price: {filteredProduct[0].price} <br />
        </h3>
        <h3>
          Description: {filteredProduct[0].description} <br />
        </h3>
      </div>
    </div>
  );
};

const Products = () => {
  const { path, url } = useNavigate();

  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        <h3 className="text-center">Welcome to the Products Page!</h3>
        <div className="container">
          <div className="row">
            {data.map((item, i) => {
              if (!item.id) return null;
              return (
                <div key={i} className="col-md-6 mt-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{item.category}</h5>
                      <p className="card-text">{item.product}</p>
                      <Link
                        to={`${url}/${item.id}`}
                        className="btn btn-primary"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Routes>
        <Route path={path} exact></Route>
        <Route path={`${path}/:productid`}>
          <Route component={Product} />
        </Route>
      </Routes>
    </div>
  );
};

export default Products;
