// // import React, { useEffect, useState } from "react";
// // import { json, Link } from "react-router-dom";
// // import { Mind_url } from "../../Constants/utils";
// // import "./WatsOnYourMind.css";

// // const Whatsonyourmind = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     const resBody = await fetch(
// //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// //     );
// //     const json = await resBody.json();
// //     const mind = json.data.cards[0].card.card.gridElements.infoWithStyle.info;
// //     setData(mind);
// //   };
// //   const separation = (array, size) => {
// //     const result = [];
// //     for (let i = 0; i < array.length; i += size) {
// //       result.push(array.slice(i, i + size));
// //     }
// //     return result;
// //   };

// //   const separated = separation(data, 10);

// //   return (
// //     <div>
// //       <h1 className="h1">What's on your mind?</h1>

// //       {data.length > 0 && (
// //         <div id="carouselExampleControls" className="carousel slide">
// //           <div className="carousel-inner">
// //             {data.map((e, index) => (
// //               <div
// //                 className={`carousel-item ${index === 0 ? "active" : ""}`}
// //                 key={index}
// //               >
// //                 <Link to={`/detail/${e.id}`}>
// //                   <img
// //                     src={Mind_url + e.imageId}
// //                     className="d-block w-100"
// //                     alt={e.title}
// //                   />
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>
// //           <button
// //             className="carousel-control-prev"
// //             type="button"
// //             data-bs-target="#carouselExampleControls"
// //             data-bs-slide="prev"
// //           >
// //             <span
// //               className="carousel-control-prev-icon"
// //               aria-hidden="true"
// //             ></span>
// //             <span className="visually-hidden">Previous</span>
// //           </button>
// //           <button
// //             className="carousel-control-next"
// //             type="button"
// //             data-bs-target="#carouselExampleControls"
// //             data-bs-slide="next"
// //           >
// //             <span
// //               className="carousel-control-next-icon"
// //               aria-hidden="true"
// //             ></span>
// //             <span className="visually-hidden">Next</span>
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Whatsonyourmind;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Mind_url } from "../../Constants/utils";
// import "./WatsOnYourMind.css";

// const Whatsonyourmind = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const json = await response.json();
//         const mind =
//           json.data.cards[0].card.card.gridElements.infoWithStyle.info;
//         setData(mind);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   const separation = (array, size) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//       result.push(array.slice(i, i + size));
//     }
//     return result;
//   };

//   const separated = separation(data, 10);

//   return (
//     <div>
//       <h1 className="h1">What's on your mind?</h1>

//       {data.length > 0 && (
//         <div id="carouselExampleControls" className="carousel slide">
//           <div className="carousel-inner">
//             {separated.map((group, groupIndex) => (
//               <div
//                 className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
//                 key={groupIndex}
//               >
//                 {group.map((e) => (
//                   <Link to={`/detail/${e.id}`} key={e.id}>
//                     <img
//                       src={Mind_url + e.imageId}
//                       className="d-block w-100"
//                       alt={e.title}
//                     />
//                   </Link>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Whatsonyourmind;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mind_url } from "../../Constants/utils";
import "./WatsOnYourMind.css";

const Whatsonyourmind = () => {
  const [data, setData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        const mind =
          json.data.cards[0].card.card.gridElements.infoWithStyle.info;
        setData(mind);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const separation = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const separated = separation(data, itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : separated.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < separated.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <h1 className="h1">What's on your mind?</h1>

      {separated.length > 0 && (
        <div id="carouselExampleControls" className="carousel slide">
          <div className="carousel-inner">
            {separated[currentIndex].map((item) => (
              <div key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <img
                    src={Mind_url + item.imageId}
                    className="d-block w-100"
                    alt={item.title}
                  />
                </Link>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Whatsonyourmind;
